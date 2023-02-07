import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filtriranje',
  templateUrl: './filtriranje.component.html',
  styleUrls: ['./filtriranje.component.css']
})
export class FiltriranjeComponent implements OnInit {

  //Za komunikaciju sa roditeljem

  @Output() submitovanje = new EventEmitter<string[]>();

  @Output() resetovanje = new EventEmitter<void>();

  constructor() { }

  //Vrednosti koje se prikazuju kao dropdown value-s od forme

  gradoviList = ["Pefkohori", "Hanioti", "Polihrono", "Kasandra","Solina"];

  putnici = ["1 osoba", "2 osobe", "3 osobe", "4 osobe", "5 osoba", "preko 5 osoba"];

  prevozList = ["avion", "voz", "autobus", "bez prevoza"];

  recenzijaList: number[] = [1,2,3,4,5];

  //Promenljiva gde cuvam vrednost koju saljem

  nizFilter: string[] = [];

  ngOnInit(): void {
  }


  //Prikupljam vrednost forme i tu vrednost stavljam kao argument od submitovanje
  onSubmit(form: NgForm){

    this.nizFilter.push(form.value.gradovi, form.value.prevoz, form.value.putnici, form.value.recenzija.toString(), form.value.polazak.toString(), form.value.povratak.toString(), form.value.min, form.value.max);

    this.submitovanje.emit(this.nizFilter);

  
    this.nizFilter = []; //Vracanje vrednosti filtera na prazan skup

  }

  //Funkcija koja samo vraca true vrednost 
  vracanjeTabele(){

    this.resetovanje.emit();    

  }

}

