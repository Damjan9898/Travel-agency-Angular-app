import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TravelService } from 'src/app/travel.service';
import { UserService } from '../auth/user.service';
import { RezervisiComponent } from './rezervisi/rezervisi.component';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  id:number;

  podatak: any;

  constructor(private travelService: TravelService, private userService: UserService, private router: Router, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.travelService.currentId.subscribe(id => this.id = id)

    this.podatak = this.travelService.getTravelById(this.id);

  }

  average(niz : number[]) :number{  // Funkcija za racunanje srednje vrednosti recenzija
    let broj = 0;

    for(let i = 0; i < niz.length;i++){
      broj += niz[i];
    }

    return Math.round(broj / niz.length);
    
  }

  rezervisi(){
    this.dialog.open(RezervisiComponent,{
      data: {
        slika: this.podatak.slika,
        naziv: this.podatak.naziv,
        recenzija: this.podatak.recenzija,
        grad: this.podatak.grad,
        polazak: this.podatak.polazak,
        povratak: this.podatak.povratak,
        prevoz: this.podatak.prevoz,
        cena: this.podatak.cena,
        broj: this.podatak.broj,
        udaljenost:this.podatak.udaljenost,
        id: this.podatak.id,
        dodatno: this.podatak.dodatno
      }
    })
  }


}
