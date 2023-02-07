import { Component, OnInit, ViewChild} from '@angular/core';
import { PutovanjaComponent } from './putovanja/putovanja.component';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {

  @ViewChild(PutovanjaComponent) child:PutovanjaComponent;

  constructor() {

   }
  

  ngOnInit(): void {

  }

  vracanjeTabele(){

    this.child.vracanjeTabele();
    
  }

  onSubmit(primljenNiz: string[]){

    this.child.onSubmit(primljenNiz);
    
  }


}
