import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Travel } from 'src/app/travel.model';
import { TravelService } from 'src/app/travel.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-putovanja',
  templateUrl: './putovanja.component.html',
  styleUrls: ['./putovanja.component.css']
})
export class PutovanjaComponent implements OnInit, AfterViewInit {

  id:number;

  
  displayedColumns: string[] = ["slika", "naziv", "cena", "recenzije"];


  minMax : number[] = [];

  cuvanjeZvezdica: number = 0;

  travelSource = new MatTableDataSource<Travel>();

  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private travelService: TravelService) { }

  defaultFilterPredicate?: (data: any, filter: string) => boolean;


  filterData: any = {};

  ngOnInit(): void {
    this.travelSource.data = this.travelService.getTravel();

    this.defaultFilterPredicate = this.travelSource.filterPredicate;

    this.travelService.currentId.subscribe(id => this.id = id)

    

  }

  newId(broj: number) {
    this.travelService.changeId(broj)
  }

  elementPick(elem : number){
    this.newId(elem);
  }

  ngAfterViewInit(){
    this.travelSource.sort = this.sort;
    this.travelSource.paginator = this.paginator;
  }

  vracanjeTabele(){
    this.travelSource.data = this.travelService.getTravel();

    // this.travelSource.filteredData = this.travelService.getTravel();

    this.travelSource.filterPredicate = this.defaultFilterPredicate;
    
    this.travelSource.filter = ""; //Vraca prikaz originalne tabele

    
  }

  onSubmit(primljenNiz: string[]){


    for(let i = 0; i < primljenNiz.length; i++){

      //Ovaj if menja filter za biranje datuma da bi se razlikovao polazak od povratka, i posebno za njih da se izvrsi filter
      
      if(i === 3){
        this.filterChange(i, primljenNiz[i])
      }
      if(i === 4){
        this.filterChange(i,primljenNiz[i])
      }
      if(i === 5){
        this.filterChange(i, primljenNiz[i])
      }

      if( i === 6 ){
        this.minMax.push(Number(primljenNiz[i]));

      }

      if( i === 7 ){

        this.minMax.push(Number(primljenNiz[i]));
       
        this.filterChange(i, "")
      }

      if(i !== 6){
            this.travelSource.filter = primljenNiz[i];
            this.travelSource.data = this.travelSource.filteredData;
      }
      
    }


  }


  checked(broj :number) :string{
    if(broj <= this.cuvanjeZvezdica){
      return "checked";
    }else{
      return " "
    }
  }

  average(niz : number[]) :number{  // Funkcija za racunanje srednje vrednosti recenzija
    let broj = 0;

    for(let i = 0; i < niz.length;i++){
      broj += niz[i];
    }

    this.cuvanjeZvezdica = Math.round(broj / niz.length);

    return Math.round(broj / niz.length);
    
  }

  

  filterChange(provera: number,promenljiva: string): void{


    this.travelSource.filterPredicate = (data: Travel, filter: string) => { 

      

      if(provera === 3){
        
        return this.average(data.recenzije) == Number(promenljiva);
      }
      else if(provera === 4){
        return data.polazak.toString() == promenljiva;
        
      }else if(provera === 5){
        return data.povratak.toString() == promenljiva;
      }else if(provera === 7){
        if(data.cena >= this.minMax[0] && data.cena <= this.minMax[1]){
          
          promenljiva = data.cena.toString();

        }
        this.minMax = [] // Brisanje niza
        
          return  data.cena.toString() == promenljiva;
       
      }else{
        return !data;
       
      }
      
    }
 }


 

}
