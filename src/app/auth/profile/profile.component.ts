import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  gradoviList: string[] = ["Pefkohori", "Hanioti", "Polihrono", "Kasandra","Solina", 'Nijedan od ponuđenih'];


  isEditing: boolean = false;
  profileForInput: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService)  { }

  ngOnInit(): void {
    this.profileForInput = {
      id: this.data.user.id,
      email: this.data.user.email,
      password: this.data.user.password,
      forename: this.data.user.forename,
      surname: this.data.user.surname,
      username: this.data.user.username,
      phoneNumber: this.data.user.phoneNumber,
      address: this.data.user.address,
      favCity: this.data.user.favCity,
      zavrsenaPutovanja: [],
      otkazanaPutovanja: [],
      predstojecaPutovanja: []
    }
  }

  finishEditing(form: NgForm){
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;
    this.data.user.username = this.profileForInput.username;
    this.data.user.forename = this.profileForInput.forename;
    this.data.user.surname = this.profileForInput.surname;
    this.data.user.phoneNumber = this.profileForInput.phoneNumber;
    this.data.user.favCity = this.profileForInput.favCity;

    this.isEditing = false;
    
  }
  logOutUser(){
    this.userService.isLoggedIn = false;
  }
}
