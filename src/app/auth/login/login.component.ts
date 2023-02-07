import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errorExists = false;
  errorText = " ";
  isTravelRouted: boolean = false;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(this.userService.isTravelRouted){
      this.isTravelRouted = true;
      return;
    } 
  }
  onSubmit(form: NgForm){
    let email = form.value.email;
    let password = form.value.lozinka;
    let user = this.userService.getUser(email);
    this.isTravelRouted = false;    
    
    if(!user){
      this.errorExists = true;
      this.errorText = "Ne postoji nalog sa emailom " + email + " !";     
      return;
    } 
    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if(!isPasswordValid){
      this.errorExists = true;
      this.errorText = "Lozinka nije ispravna!"
      return;
    } 
    if(this.userService.isTravelRouted){
      this.router.navigate(['/travel']);
      this.userService.isLoggedIn = true;
      this.userService.isTravelRouted = false;
      return;
    } 
    this.errorExists = false;
    this.router.navigate(['']);
    this.userService.isLoggedIn = true;
   
   
  }
}
