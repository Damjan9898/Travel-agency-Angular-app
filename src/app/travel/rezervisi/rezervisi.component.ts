import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../auth/user.service';
import { Router } from '@angular/router';
import { VecRezervisanoComponent } from './vec-rezervisano/vec-rezervisano.component';

@Component({
  selector: 'app-rezervisi',
  templateUrl: './rezervisi.component.html',
  styleUrls: ['./rezervisi.component.css']
})
export class RezervisiComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public receiveData: any,  private userService: UserService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  average(niz : number[]) :number{  // Funkcija za racunanje srednje vrednosti recenzija
    let broj = 0;

    for(let i = 0; i < niz.length;i++){
      broj += niz[i];
    }

    return Math.round(broj / niz.length);
    
  }
  rezervisi(){
    if(!this.userService.isLoggedIn){
      this.router.navigate(['/login']);
      this.userService.isTravelRouted = true;
      
    } else{

      for(let i = 0; i < this.userService.currentUser.predstojecaPutovanja.length; i++ ){
        if(this.userService.currentUser.predstojecaPutovanja[i].id === this.receiveData.id){    
          this.dialog.open(VecRezervisanoComponent)
          return;
        }
  
      }
      this.userService.currentUser.predstojecaPutovanja.push(this.receiveData);

      
      this.router.navigate(['/korpa']);
    }
  }
}
