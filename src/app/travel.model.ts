export interface Travel {
    id:number;
    slika: string[];
    opis: string;
    naziv: string;
    grad: string;
    polazak: Date;
    povratak: Date;
    prevoz: "avion" | "voz" | "autobus" | "bez prevoza"; 
    cena: number;
    broj: string;
    recenzije: number[];
    internet:"besplatan WiFi" | "WiFi se plaća";
    ljubimci: "dozvoljeni kućni ljubimci" | "nisu dozvoljeni kućni ljubimci";
    parking: "besplatan parking" | "parking se plaća"; 
    klima: "apartman poseduje klima-uređaj" | "apartman ne poseduje klima-uređaj";
    dodatno:string[];
    dodatnaCena:string;
    udaljenost: string;
    starRating:number;
    voted:boolean;

}