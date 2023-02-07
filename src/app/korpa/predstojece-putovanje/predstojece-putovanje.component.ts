import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/auth/user.service';
import { Travel } from 'src/app/travel.model';
import { TravelService } from 'src/app/travel.service';
import { OtkaziPutovanjeComponent } from './otkazi-putovanje/otkazi-putovanje.component';

@Component({
  selector: 'app-predstojece-putovanje',
  templateUrl: './predstojece-putovanje.component.html',
  styleUrls: ['./predstojece-putovanje.component.css']
})
export class PredstojecePutovanjeComponent implements OnInit {

  id:number;
  putovanje: any;
  disabled = true;


  nizDodatnihCena = [];

  dodatnaCena = "";

  dataSource: Travel[] = this.userService.currentUser.predstojecaPutovanja;
  constructor(private userService: UserService, private travelService: TravelService, private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  changeDisable(){
    this.disabled = false;
  }

  onSubmit(form : NgForm, putovanjeId: number){
    
    let niz = form.value.dodatno;


    
    for(let i = 0; i < this.userService.currentUser.predstojecaPutovanja.length; i++ ){
      if(this.userService.currentUser.predstojecaPutovanja[i].id === putovanjeId){

        this.userService.currentUser.predstojecaPutovanja[i].dodatnaCena = this.userService.updateUser( niz);
        this.userService.currentUser.predstojecaPutovanja[i].dodatno = niz;
      }

    }
  }
  otkazi(putovanjeId: number){    
    for(let i = 0; i < this.userService.currentUser.predstojecaPutovanja.length; i++ ){
      if(this.userService.currentUser.predstojecaPutovanja[i].id === putovanjeId){
        this.putovanje = this.travelService.getTravelById(putovanjeId);        
      }
    }
    this.dialog.open(OtkaziPutovanjeComponent,{
      data: {
        naziv: this.putovanje.naziv,
        recenzija: this.putovanje.recenzija,
        grad: this.putovanje.grad,
        polazak: this.putovanje.polazak,
        povratak: this.putovanje.povratak,
        prevoz: this.putovanje.prevoz,
        cena: this.putovanje.cena,
        broj: this.putovanje.broj,
        udaljenost:this.putovanje.udaljenost,
        id: this.putovanje.id
      }
    })

  }


  prikazCene(){

    let ukupnaCena = 0;

    for(let i = 0; i < this.userService.currentUser.predstojecaPutovanja.length; i++ ){
      
     ukupnaCena += this.userService.currentUser.predstojecaPutovanja[i].cena
      
    }

    

    for(let i = 0; i < this.userService.currentUser.predstojecaPutovanja.length; i++ ){

      for(let j = 0; j < this.userService.currentUser.predstojecaPutovanja[i].dodatno.length; j++){

        ukupnaCena +=  Number(this.userService.currentUser.predstojecaPutovanja[i].dodatno[j]);

      }

      
      
    }

    return ukupnaCena;
  }

  potpunoBrisanje(){

  }
}
