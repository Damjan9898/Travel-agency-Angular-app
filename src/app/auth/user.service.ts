import { Injectable } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Travel } from '../travel.model';

export interface User {
  forename: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  favCity: string[];
  id: number;
  zavrsenaPutovanja: Travel[];
  otkazanaPutovanja: Travel[];
  predstojecaPutovanja: Travel[];
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  isTravelRouted: boolean = false;
  isLoggedIn: boolean = false;
  currentUser: User = UserService.dummyUserList[1];

  static dummyUserList: Array<User> = [
    {
      forename: "Darja",
      surname: "Nedic",
      username: "dnedic98",
      email: "dnedic98@gmail.com",
      password: "dnedic98",
      phoneNumber : "0651111111",
      address : "Kej oslobodjenja 17",
      favCity: ["Pefkohori", "Hanioti", "Polihrono"],
      id: 100,
      zavrsenaPutovanja: [{
        id:111,
        slika:['../../../assets/img/a11.jpg', '../../../assets/img/a12.jpg', '../../../assets/img/a13.jpg'],
         opis:"Objekat Kleopatra apartmani se nalazi u Haniotiju, prijatnom letovalistu na Halkidikiju pogodnom za porodicu ili mlade. U ponudi je smeštaj sa pogledom na dvoriste sa rostiljem, i besplatnim WiFi internetom.",
         naziv:"Kleopatra apartmani",
         grad : "Hanioti",
         polazak: new Date(2022, 0, 6, 0, 0, 0),
         povratak: new Date(2022, 0, 8, 0, 0, 0),
         prevoz: "autobus",
         cena: 140,
         broj : "5 osoba",
         recenzije: [5,4,4],
         internet:"besplatan WiFi",
         ljubimci:"dozvoljeni kućni ljubimci",
         parking:"besplatan parking",
         klima:"apartman poseduje klima-uređaj",
         dodatno:[],
         dodatnaCena:"",
         udaljenost:"630km(13h)",
         starRating:0,
         voted:false
         
  },
      {
        id:112,
        slika:['../../../assets/img/a21.jpg', '../../../assets/img/a22.jpg', '../../../assets/img/a23.jpg'],
         opis:"Apartmani Dionis se nalaze u mestu Polihrono, savrsenom gradicu za relaksaciju sa porodicom i prijateljima. U ponudi je smeštaj sa parkingom, klima uredjajem, i besplatnim WiFi internetom.",
         naziv:"Apartmani Dionis",
         grad : "Polihrono",
         polazak: new Date(2022, 0, 6, 0, 0, 0),
         povratak: new Date(2022, 0, 8, 0, 0, 0),
         prevoz: "avion",
         cena: 230,
         broj : "3 osobe",
         recenzije: [3,5,4],
         internet:"besplatan WiFi",
         ljubimci:"dozvoljeni kućni ljubimci",
         parking:"besplatan parking",
         klima:"apartman poseduje klima-uređaj",
         dodatno:[],
         dodatnaCena:"",
         udaljenost:"585km(12h)",
         starRating:0,
         voted:false
    }
  ] ,
  otkazanaPutovanja: [

  ],
  predstojecaPutovanja: []    
    },
    {
      forename: "Damjan",
      surname: "Belojevic",
      username: "dbelojevic98",
      email: "dbelojevic98@gmail.com",
      password: "dbelojevic98",
      phoneNumber : "0652222222",
      address : "Kej oslobodjenja 65",
      favCity: ["Hanioti", "Polihrono"],
      id: 101,
      zavrsenaPutovanja: [{
        id:111,
        slika:['../../../assets/img/a11.jpg', '../../../assets/img/a12.jpg', '../../../assets/img/a13.jpg'],
         opis:"Objekat Kleopatra apartmani se nalazi u Haniotiju, prijatnom letovalistu na Halkidikiju pogodnom za porodicu ili mlade. U ponudi je smeštaj sa pogledom na dvoriste sa rostiljem, i besplatnim WiFi internetom.",
         naziv:"Kleopatra apartmani",
         grad : "Hanioti",
         polazak: new Date(2022, 0, 6, 0, 0, 0),
         povratak: new Date(2022, 0, 8, 0, 0, 0),
         prevoz: "autobus",
         cena: 140,
         broj : "5 osoba",
         recenzije: [5,4,4],
         internet:"besplatan WiFi",
         ljubimci:"dozvoljeni kućni ljubimci",
         parking:"besplatan parking",
         klima:"apartman poseduje klima-uređaj",
         dodatno:[],
         dodatnaCena:"",
         udaljenost:"630km(13h)",
         starRating:0,
         voted:false
  },
     {
        id:113,
        slika:['../../../assets/img/a31.jpg', '../../../assets/img/a32.jpg', '../../../assets/img/a33.jpg'],
         opis:"Objekat Posejdon se nalazi u prelepom Pefkohoriju, omiljenom srpskom letovalistu na Halkidikiju u kom je zagarantovan dobar provod ili vrhunska relaksacija. U ponudi je smeštaj sa pogledom na more, klima uredjajem i besplatnim WiFi internetom.",
         naziv:"Posejdon apartmani",
         grad : "Pefkohori",
         polazak: new Date(2022, 0, 6, 0, 0, 0),
         povratak: new Date(2022, 0, 8, 0, 0, 0),
         prevoz: "autobus",
         cena: 140,
         broj : "5 osoba",
         recenzije: [5,5,4],
         internet:"besplatan WiFi",
         ljubimci:"dozvoljeni kućni ljubimci",
         parking:"besplatan parking",
         klima:"apartman poseduje klima-uređaj",
         dodatno:[],
         dodatnaCena:"",
         udaljenost:"650km(14h)",
         starRating:0,
         voted:false
  }

      ] ,
      otkazanaPutovanja: [
      ],
      predstojecaPutovanja: []
    },
    {
      forename: "Admin",
      surname: "Admin",
      username: "admin1",
      email: "admin1@gmail.com",
      password: "admin111",
      phoneNumber : "0651212121",
      address : "Beogradska 11",
      favCity: [ "Polihrono", "Kasandra","Solina"],
      id: 102 ,
      zavrsenaPutovanja: [] ,
      otkazanaPutovanja: [],
      predstojecaPutovanja: [
        {id:111,
        slika:['../../../assets/img/a11.jpg', '../../../assets/img/a12.jpg', '../../../assets/img/a13.jpg'],
         opis:"Objekat Kleopatra apartmani se nalazi u Haniotiju, prijatnom letovalistu na Halkidikiju pogodnom za porodicu ili mlade. U ponudi je smeštaj sa pogledom na dvoriste sa rostiljem, i besplatnim WiFi internetom.",
         naziv:"Kleopatra apartmani",
         grad : "Hanioti",
         polazak: new Date(2022, 0, 6, 0, 0, 0),
         povratak: new Date(2022, 0, 8, 0, 0, 0),
         prevoz: "autobus",
         cena: 140,
         broj : "5 osoba",
         recenzije: [5,4,4],
         internet:"besplatan WiFi",
         ljubimci:"dozvoljeni kućni ljubimci",
         parking:"besplatan parking",
         klima:"apartman poseduje klima-uređaj",
         dodatno:[],
         dodatnaCena:"",
         udaljenost:"630km(13h)",
         starRating:0,
         voted:false
        }
      ]      
    },
    {
      forename: "Test",
      surname: "Test",
      username: "Test98",
      email: "test@gmail.com",
      password: "test1234",
      phoneNumber : "0653333333",
      favCity: [ "Polihrono","Solina"],
      address : "Jovana Subotica 1",
      id: 103,
      zavrsenaPutovanja: [{
        id:111,
        slika:['../../../assets/img/a11.jpg', '../../../assets/img/a12.jpg', '../../../assets/img/a13.jpg'],
         opis:"Objekat Kleopatra apartmani se nalazi u Haniotiju, prijatnom letovalistu na Halkidikiju pogodnom za porodicu ili mlade. U ponudi je smeštaj sa pogledom na dvoriste sa rostiljem, i besplatnim WiFi internetom.",
         naziv:"Kleopatra apartmani",
         grad : "Hanioti",
         polazak: new Date(2022, 0, 6, 0, 0, 0),
         povratak: new Date(2022, 0, 8, 0, 0, 0),
         prevoz: "autobus",
         cena: 140,
         broj : "5 osoba",
         recenzije: [5,4,4],
         internet:"besplatan WiFi",
         ljubimci:"dozvoljeni kućni ljubimci",
         parking:"besplatan parking",
         klima:"apartman poseduje klima-uređaj",
         dodatno:[],
         dodatnaCena:"",
         udaljenost:"630km(13h)",
         starRating:0,
         voted:false
         
  },
      {
        id:112,
        slika:['../../../assets/img/a21.jpg', '../../../assets/img/a22.jpg', '../../../assets/img/a23.jpg'],
         opis:"Apartmani Dionis se nalaze u mestu Polihrono, savrsenom gradicu za relaksaciju sa porodicom i prijateljima. U ponudi je smeštaj sa parkingom, klima uredjajem, i besplatnim WiFi internetom.",
         naziv:"Apartmani Dionis",
         grad : "Polihrono",
         polazak: new Date(2022, 0, 6, 0, 0, 0),
         povratak: new Date(2022, 0, 8, 0, 0, 0),
         prevoz: "avion",
         cena: 230,
         broj : "3 osobe",
         recenzije: [3,5,4],
         internet:"besplatan WiFi",
         ljubimci:"dozvoljeni kućni ljubimci",
         parking:"besplatan parking",
         klima:"apartman poseduje klima-uređaj",
         dodatno:[],
         dodatnaCena:"",
         udaljenost:"585km(12h)",
         starRating:0,
         voted:false
    }

      ] ,
      otkazanaPutovanja: [

      ],
      predstojecaPutovanja: []  

    },
  ]
  

  getUser(userEmail: string): User{
    this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)
    let nadjen = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)
    return nadjen;
    
  }
  setUser(objekat: any){
    UserService.dummyUserList.push(objekat)
  }
  getUserName(user: User): string {
    return user.username;
  }
  getUserById(id: number): User {
    var foundUser: User;
    UserService.dummyUserList.forEach(user => {
      if (user.id == id){
        foundUser = user;
      }
    })
    this.currentUser = foundUser;
    return foundUser;
  }

  isPasswordCorrect(userEmail: string, password: string): boolean{
    return UserService.dummyUserList.find(userToFind => (userToFind.email == userEmail && userToFind.password == password)) !=undefined ;
  }

  registerUser(forename: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    favCity: string[],
    zavrsenaPutovanja: Array<Travel>,
    otkazanaPutovanja: Array<Travel>,
    predstojecaPutovanja: Array<Travel>
   ){
    let maxId: number = 0;
    UserService.dummyUserList.forEach(user => {
      if(maxId < user.id){
        maxId = user.id;
      }
    });
    let id = ++maxId;
    let user: User = { forename, surname, username, email, password, phoneNumber, address, favCity, id, zavrsenaPutovanja, otkazanaPutovanja,
      predstojecaPutovanja
    };
    this.setUser(user);
    this.currentUser = user;
    
  }


  updateUser(niz:string[]) :string{

    let dodatnaCena = 0;

    let vracanjeCene = "";

    //Povecavam cenu za novoizabrane dodatne opcije
    if(niz.includes("30")){
      dodatnaCena+=30;
    }
    if(niz.includes("20")){
      dodatnaCena+=20;
    }
    if(niz.includes("10")){
      dodatnaCena+=10;

    }
    vracanjeCene = "(+" + dodatnaCena.toString() + ")";

    if(niz.length == 0){
      vracanjeCene = "";
    }

    return vracanjeCene;

  
  }

  constructor() { }
}
