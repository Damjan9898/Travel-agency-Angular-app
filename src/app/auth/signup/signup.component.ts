import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorExists = false;
  errorText = " ";
  
  constructor(private userService: UserService, private router: Router) { }


  gradoviList: string[] = ["Pefkohori", "Hanioti", "Polihrono", "Kasandra","Solina", "Nijedna od ponuđenih"];



  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(!this.userService.getUser(form.value.email)){
      this.errorExists = false;
      this.userService.registerUser(
        form.value.ime,
        form.value.prezime,
        form.value.username,
        form.value.email,
        form.value.lozinka,
        form.value.telefon,
        form.value.adresa,
        form.value.gradovi,
        [],
        [],
        []
        )
        this.router.navigate(['/login']) // redirekcija na login
    } else {
      this.errorExists = true;
      this.errorText = "Nalog sa ovim emailom vec postoji!"
    }
  }

}
