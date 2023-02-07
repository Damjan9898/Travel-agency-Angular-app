import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//importovanje

import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  constructor( private router: Router) { }


  // gradoviList: string[] = ['Prvi grad', 'Drugi grad', 'Treci grad', 'Cetvrti grad', 'Peti grad', 'Sesti grad'];

  // putnici: string[] = ['1 osoba', '2 osobe', '3 osobe', '4 osobe', '5 osoba', 'Preko 6 osoba'];



  ngOnInit(): void {
    
  }


  // doFilter(id: number){


  //   localStorage.setItem('dataSource1', form.value.gradovi + "|" + (form.value.polazak).toString() + "|" + (form.value.povratak).toString() + "|" + form.value.putnici);
    
    
  //   this.router.navigate(['travel']);
    
  // }

}
