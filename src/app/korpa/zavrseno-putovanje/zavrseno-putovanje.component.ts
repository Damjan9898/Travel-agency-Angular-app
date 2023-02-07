import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/auth/user.service';
import { Travel } from 'src/app/travel.model';
import { TravelService } from 'src/app/travel.service';

@Component({
  selector: 'app-zavrseno-putovanje',
  templateUrl: './zavrseno-putovanje.component.html',
  styleUrls: ['./zavrseno-putovanje.component.css']
})
export class ZavrsenoPutovanjeComponent implements OnInit {

  
  dataSource: Travel[] = this.userService.currentUser.zavrsenaPutovanja;


  constructor(private userService: UserService, private travelService: TravelService) { }

  ngOnInit(): void {
  }


  ocenjivanje(putovanjeId: number){

    for(let i = 0; i < this.userService.currentUser.zavrsenaPutovanja.length; i++ ){
      if(this.userService.currentUser.zavrsenaPutovanja[i].id === putovanjeId){

        this.travelService.getTravelById(i).recenzije.push(this.userService.currentUser.zavrsenaPutovanja[i].starRating)
        
        this.userService.currentUser.zavrsenaPutovanja[i].voted = true;

      }

    }

  }




}
