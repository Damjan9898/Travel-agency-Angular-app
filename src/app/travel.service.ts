import { Travel } from './travel.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TravelService {
    private travels: Travel[] = [
        {  
            id:0,
            slika:['../../../assets/img/a11.jpg', '../../../assets/img/a12.jpg', '../../../assets/img/a13.jpg'],
             opis:"Posedujemo jedne od najlepših apartmana u gradu. Svaki apartman se nalazi samo 200m od glavne gradske plaže. U ponudu ulazi i besplatan doručak za svako dete ispod 12 godina. Apartmani se nalaze 50m od prodavnice.",
             naziv:"Paradiso apartmani",
             grad : "Polihrono",
             polazak: new Date(2022, 5, 6, 0, 0, 0),
             povratak: new Date(2022, 5, 16, 0, 0, 0),
             prevoz: "avion",
             cena: 150,
             broj : "1 osoba",
             recenzije: [5,4,5],
             internet:"besplatan WiFi",
             ljubimci:"dozvoljeni kućni ljubimci",
             parking:"besplatan parking",
             klima:"apartman poseduje klima-uređaj",
             dodatno:[],
             dodatnaCena:"",
             udaljenost:"585km(12h)",
             starRating:0,
             voted:false
    },
    {  
            id:1,
            slika:['../../../assets/img/a21.jpg', '../../../assets/img/a22.jpg', '../../../assets/img/a23.jpg'],
            opis:"Vila se nalazi u samom centru grada, a najbliža plaža je udaljena samo 100m. U blizini vile nalaze se sve najveće prodavnice kao i mnogi restorani i mesta za izlaske. Svaki apartman ima terasu.",
            naziv:"Travelaso apartmani",
            grad : "Hanioti", 
            polazak: new Date(2022, 6, 12, 0, 0, 0), 
            povratak: new Date(2022, 6, 23, 0, 0, 0), 
            prevoz: "bez prevoza", 
            cena: 250,
            broj : "2 osobe", 
            recenzije: [1,1,2,1,1], 
            internet:"besplatan WiFi", 
            ljubimci:"dozvoljeni kućni ljubimci", 
            parking:"besplatan parking", 
            klima:"apartman poseduje klima-uređaj", 
            dodatno:[],
            dodatnaCena:"",
            udaljenost:"600km(13.5h)",
            starRating:0,
            voted:false
    },
    {  
            id:2,
            slika:['../../../assets/img/a31.jpg', '../../../assets/img/a32.jpg', '../../../assets/img/a33.jpg'],
            opis:"Apartmani se nalaze na samoj obali mora pored najpoznatijeg restorana u gadu. Sve 3 gradske plaže su na udaljenosti ispod 150m od naše vile. Pored prelepih plaža naša vila posduje spa centar sa bazenom i đakuzijem.",
            naziv:"Apartmani Ana", 
            grad : "Pefkohori", 
            polazak: new Date(2022, 6, 1, 0, 0, 0), 
            povratak: new Date(2022, 6, 14, 0, 0, 0), 
            prevoz: "autobus", 
            cena: 350, 
            broj : "4 osobe", 
            recenzije: [4,5,4,3,4,4,4,4], 
            internet:"WiFi se plaća", 
            ljubimci:"nisu dozvoljeni kućni ljubimci", 
            parking:"besplatan parking", 
            klima:"apartman poseduje klima-uređaj",
            dodatno:[],
            dodatnaCena:"",
            udaljenost:"650km(14h)",
            starRating:0,
            voted:false
     },
    {  
            id:3,
            slika:['../../../assets/img/a41.jpg', '../../../assets/img/a42.jpg', '../../../assets/img/a43.jpg'],
            opis:"Vila se nalazi u najmirnijem delu grada sa najlepšim pogledom na more i gradsku plažu. Uz svaki aranžman dobijate besplatan doručak, a za decu ispod 10 godina gratis besplatan ručak. U prizemlju vile nalazi se spa centar.",
            naziv:"Cefalonos", 
            grad : "Pefkohori", 
            polazak: new Date(2022, 6, 1, 0, 0, 0), 
            povratak: new Date(2022, 6, 14, 0, 0, 0), 
            prevoz: "autobus", 
            cena: 350, 
            broj : "4 osobe", 
            recenzije: [3,3,4,5,5,4,4,4,4,4,4,4,4], 
            internet:"besplatan WiFi", 
            ljubimci:"dozvoljeni kućni ljubimci", 
            parking:"parking se plaća", 
            klima:"apartman ne poseduje klima-uređaj",
            dodatno:[],
            dodatnaCena:"",
            udaljenost:"650km(14h)",
            starRating:0,
            voted:false
     },
    {  
            id:4,
            slika:['../../../assets/img/a51.jpg', '../../../assets/img/a52.jpg', '../../../assets/img/a53.jpg'],
            opis:"Imamo apartmane za 1 do 5 osoba. Svaki obrok ulazi u cenu zajedno sa spa centrom koji poseduje đakuzi i saune. Najpliža plaža udaljena je 400m od vile. Centar se nalazi na 20 minuta. Oko vile se nalazi nekoliko restorana.",
            naziv:"Travelos apartmani", 
            grad : "Solina",
            polazak: new Date(2022, 7, 8, 0, 0, 0), 
            povratak: new Date(2022,7, 10, 0, 0, 0), 
            prevoz: "bez prevoza", 
            cena: 700, 
            broj : "3 osobe", 
            recenzije: [2,3,3,3,3,3,3,4], 
            internet:"besplatan WiFi", 
            ljubimci:"dozvoljeni kućni ljubimci", 
            parking:"besplatan parking", 
            klima:"apartman poseduje klima-uređaj",
            dodatno:[],
            dodatnaCena:"",
            udaljenost:"570km(11h)",
            starRating:0,
            voted:false
     },
     {  
        id:5,
        slika:['../../../assets/img/a12.jpg', '../../../assets/img/a11.jpg', '../../../assets/img/a13.jpg'],
        opis:"U okrugu apartmana nalazi se glavno gradsko šetalište uz obalu mora. Pored toga ima nekoliko parkova za decu kao i razni restorani i klubovi za mlade. Svaki apartman poseduje 2 terase sa pogledom na hrastovu šumu.",
        naziv:"Vila Ellena", 
        grad : "Pefkohori",
        polazak: new Date(2022, 6, 1, 0, 0, 0), 
        povratak: new Date(2022, 6, 14, 0, 0, 0), 
        prevoz: "autobus", 
        cena: 350, 
        broj : "4 osobe", 
        recenzije: [4,4,4,5,4], 
        internet:"besplatan WiFi", 
        ljubimci:"dozvoljeni kućni ljubimci", 
        parking:"parking se plaća", 
        klima:"apartman ne poseduje klima-uređaj",
        dodatno:[],
        dodatnaCena:"",
        udaljenost:"650km(14h)",
        starRating:0,
        voted:false
    },
    {  
        id:6,
        slika:['../../../assets/img/a22.jpg', '../../../assets/img/a21.jpg', '../../../assets/img/a23.jpg'],
        opis:"Posedujemo jedne od najlepših apartmana u gradu. Svaki apartman se nalazi samo 400m od glavne gradske plaže. U ponudu ulazi i besplatan doručak za svako dete ispod 6 godina. Apartmani se nalaze 80m od prodavnice.",
        naziv:"Milos apartmani", 
        grad : "Kasandra",
        polazak: new Date(2022, 8, 8, 0, 0, 0), 
        povratak: new Date(2022, 8, 10, 0, 0, 0), 
        prevoz: "voz", 
        cena: 100, 
        broj : "preko 5 osoba", 
        recenzije: [2,2,2,1,1,1,1,1,1,1,1], 
        internet:"besplatan WiFi", 
        ljubimci:"dozvoljeni kućni ljubimci", 
        parking:"besplatan parking", 
        klima:"apartman poseduje klima-uređaj",
        dodatno:[],
        dodatnaCena:"",
        udaljenost:"610km(12.5h)",
        starRating:0,
        voted:false
    },
    {  
        id:7,
        slika:['../../../assets/img/a32.jpg', '../../../assets/img/a31.jpg', '../../../assets/img/a33.jpg'],
        opis:"Vila se nalazi u samom centru grada, a najbliža plaža je udaljena samo 300m. U blizini vile nalaze se sve najveće prodavnice kao i mnogi restorani i mesta za izlaske. Svaki apartman ima terasu.",
        naziv:"Vila Gabriella", 
        grad : "Kasandra",
        polazak: new Date(2022, 7, 21, 0, 0, 0), 
        povratak: new Date(2022, 7, 29, 0, 0, 0), 
        prevoz: "avion", 
        cena: 500, 
        broj : "2 osobe", 
        recenzije: [5,5,5,5,5], 
        internet:"WiFi se plaća", 
        ljubimci:"dozvoljeni kućni ljubimci", 
        parking:"parking se plaća", 
        klima:"apartman poseduje klima-uređaj",
        dodatno:[],
        dodatnaCena:"",
        udaljenost:"610km(12.5h)",
        starRating:0,
        voted:false
    },
    {  
        id:8,
        slika:['../../../assets/img/a42.jpg', '../../../assets/img/a41.jpg', '../../../assets/img/a43.jpg'],
        opis:"Apartmani se nalaze na samoj obali mora pored najpoznatijeg restorana u gadu. Sve 4 gradske plaže su na udaljenosti ispod 90m od naše vile. Pored prelepih plaža naša vila posduje spa centar sa bazenom i đakuzijem.",
        naziv:"Apolon apartmani", 
        grad : "Hanioti",
        polazak: new Date(2022, 9, 8, 0, 0, 0), 
        povratak: new Date(2022, 9, 26, 0, 0, 0), 
        prevoz: "bez prevoza", 
        cena: 200, 
        broj : "5 osoba", 
        recenzije: [1,1,1,1], 
        internet:"WiFi se plaća", 
        ljubimci:"nisu dozvoljeni kućni ljubimci", 
        parking:"besplatan parking", 
        klima:"apartman poseduje klima-uređaj",
        dodatno:[],
        dodatnaCena:"",
        udaljenost:"630km(13h)",
        starRating:0,
        voted:false
    },
    {  
        id:9,
        slika:['../../../assets/img/a52.jpg', '../../../assets/img/a51.jpg', '../../../assets/img/a53.jpg'],
        opis:"Vila se nalazi u najmirnijem delu grada sa najlepšim pogledom na more i gradsku plažu. Uz svaki aranžman dobijate besplatan doručak, a za decu ispod 10 godina gratis besplatan ručak. U prizemlju vile nalazi teretna.",
        naziv:"Vila Nikolos", 
        grad : "Polihrono",
        polazak: new Date(2022, 8, 11, 0, 0, 0), 
        povratak: new Date(2022, 8, 30, 0, 0, 0), 
        prevoz: "voz", 
        cena: 600, 
        broj : "3 osobe", 
        recenzije: [2,2,2,4,4,4,3], 
        internet:"besplatan WiFi", 
        ljubimci:"dozvoljeni kućni ljubimci", 
        parking:"besplatan parking", 
        klima:"apartman poseduje klima-uređaj",
        dodatno:[],
        dodatnaCena:"",
        udaljenost:"585km(12h)",
        starRating:0,
        voted:false
    },
    {  
        id:10,
        slika:['../../../assets/img/a13.jpg', '../../../assets/img/a12.jpg', '../../../assets/img/a11.jpg'],
        opis:"Imamo apartmane za 2 do 4 osobe. Svaki obrok ulazi u cenu zajedno sa spa centrom koji poseduje đakuzi i saune. Najpliža plaža udaljena je 400m od vile. Centar se nalazi na 30 minuta. Oko vile se nalazi nekoliko restorana.",
        naziv:"Anastas apartmani", 
        grad : "Pefkohori",
        polazak: new Date(2022, 6, 6, 0, 0, 0), 
        povratak: new Date(2022, 6, 27, 0, 0, 0), 
        prevoz: "avion", 
        cena: 400, 
        broj : "2 osobe", 
        recenzije: [5,5,5], 
        internet:"besplatan WiFi", 
        ljubimci:"nisu dozvoljeni kućni ljubimci", 
        parking:"besplatan parking", 
        klima:"apartman poseduje klima-uređaj",
        dodatno:[],
        dodatnaCena:"",
        udaljenost:"650km(14h)",
        starRating:0,
        voted:false
    },
    {  
        id:11,
        slika:['../../../assets/img/a23.jpg', '../../../assets/img/a22.jpg', '../../../assets/img/a21.jpg'],
        opis:"Posedujemo jedne od najlepših apartmana u gradu. Svaki apartman se nalazi samo 100m od glavne gradske plaže. U ponudu ulazi i besplatan doručak za svako dete ispod 12 godina. Apartmani se nalaze 170m od prodavnice.",
        naziv:"Vila Zazikos", 
        grad : "Solina",
        polazak: new Date(2022, 7, 8, 0, 0, 0), 
        povratak: new Date(2022, 7, 10, 0, 0, 0), 
        prevoz: "bez prevoza", 
        cena: 230, 
        broj : "1 osoba", 
        recenzije: [4,4,4], 
        internet:"besplatan WiFi", 
        ljubimci:"dozvoljeni kućni ljubimci", 
        parking:"besplatan parking", 
        klima:"apartman poseduje klima-uređaj",
        dodatno:[],
        dodatnaCena:"",
        udaljenost:"570km(11h)",
        starRating:0,
        voted:false
    },
    {  
        id:12,
        slika:['../../../assets/img/a33.jpg', '../../../assets/img/a32.jpg', '../../../assets/img/a31.jpg'],
        opis:"Vila se nalazi u samom centru grada, a najbliža plaža je udaljena samo 400m. U blizini vile nalaze se sve najveće prodavnice kao i mnogi restorani i mesta za izlaske. Svaki apartman ima terasu.",
        naziv:"Manos apartmani", 
        grad : "Hanioti",
        polazak: new Date(2022, 9, 9, 0, 0, 0), 
        povratak: new Date(2022, 9, 19, 0, 0, 0), 
        prevoz: "autobus", 
        cena: 420, 
        broj : "3 osobe", 
        recenzije: [1,1,1], 
        internet:"WiFi se plaća", 
        ljubimci:"nisu dozvoljeni kućni ljubimci", 
        parking:"besplatan parking", 
        klima:"apartman poseduje klima-uređaj",
        dodatno:[],
        dodatnaCena:"",
        udaljenost:"630km(13h)",
        starRating:0,
        voted:false
    },
    {  
        id:13,
        slika:['../../../assets/img/a43.jpg', '../../../assets/img/a42.jpg', '../../../assets/img/a41.jpg'],
        opis:"Apartmani se nalaze na samoj obali mora pored najpoznatijeg restorana u gadu. Sve gradske plaže su na udaljenosti ispod 200m od naše vile. Pored prelepih plaža naša vila posduje spa centar sa bazenom i đakuzijem.",
        naziv:"Vila Nikolinas", 
        grad : "Kasandra",
        polazak: new Date(2022, 6, 6, 0, 0, 0), 
        povratak: new Date(2022, 6, 16, 0, 0, 0), 
        prevoz: "bez prevoza", 
        cena: 200, 
        broj : "4 osobe", 
        recenzije: [2,2,2], 
        internet:"besplatan WiFi", 
        ljubimci:"dozvoljeni kućni ljubimci", 
        parking:"besplatan parking", 
        klima:"apartman ne poseduje klima-uređaj",
        dodatno:[],
        dodatnaCena:"",
        udaljenost:"610km(12.5h)",
        starRating:0,
        voted:false
    },
    {  
        id:14,
        slika:['../../../assets/img/a53.jpg', '../../../assets/img/a52.jpg', '../../../assets/img/a51.jpg'],
        opis:"Imamo apartmane za 1 do 3 osobe. Svaki obrok ulazi u cenu zajedno sa spa centrom koji poseduje đakuzi i saune. Najpliža plaža udaljena je 100m od vile. Centar se nalazi na 20 minuta. Oko vile se nalazi nekoliko restorana.",
        naziv:"Vila Daros", 
        grad : "Pefkohori",
        polazak: new Date(2022, 8, 5, 0, 0, 0), 
        povratak: new Date(2022, 8, 14, 0, 0, 0), 
        prevoz: "voz", 
        cena: 330, 
        broj : "5 osoba", 
        recenzije: [2,2,2], 
        internet:"besplatan WiFi", 
        ljubimci:"dozvoljeni kućni ljubimci", 
        parking:"besplatan parking", 
        klima:"apartman poseduje klima-uređaj",
        dodatno:[],
        dodatnaCena:"",
        udaljenost:"650km(14h)",
        starRating:0,
        voted:false
    },
    ]

    getTravel() {
        return this.travels;
    }

 

    private idSource = new BehaviorSubject(1); //1 je default vrednost
    currentId = this.idSource.asObservable();

    changeId(id: number) {
        this.idSource.next(id)
    }


    getTravelById(id : number) {

      let correct = 0;

        for(let i = 0; i < this.travels.length; i++){
          if(this.travels[i].id === id ){
            correct = i;
          }
        }
            return this.travels[correct];
    }

}