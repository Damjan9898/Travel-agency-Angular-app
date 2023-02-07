import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/auth/user.service';
import { TravelService } from 'src/app/travel.service';

@Component({
  selector: 'app-otkazi-putovanje',
  templateUrl: './otkazi-putovanje.component.html',
  styleUrls: ['./otkazi-putovanje.component.css']
})
export class OtkaziPutovanjeComponent implements OnInit {

 

  constructor(@Inject(MAT_DIALOG_DATA) public receiveData: any, private userService: UserService, private travelService: TravelService) { }

  ngOnInit(): void {
  }

  otkazi(){
    this.userService.currentUser.otkazanaPutovanja.push(this.receiveData);
    
    for(let i = 0; i < this.userService.currentUser.predstojecaPutovanja.length; i++ ){
      if(this.userService.currentUser.predstojecaPutovanja[i].id === this.receiveData.id){
        this.userService.currentUser.predstojecaPutovanja.splice(i, 1);        
      }
    }

    
  }
}
