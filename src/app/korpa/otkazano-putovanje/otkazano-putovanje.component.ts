import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { Travel } from 'src/app/travel.model';
import { TravelService } from 'src/app/travel.service';

@Component({
  selector: 'app-otkazano-putovanje',
  templateUrl: './otkazano-putovanje.component.html',
  styleUrls: ['./otkazano-putovanje.component.css']
})
export class OtkazanoPutovanjeComponent implements OnInit {

  dataSource: Travel[] = this.userService.currentUser.otkazanaPutovanja;

  constructor(private userService: UserService, private travelService: TravelService) { }

  ngOnInit(): void {
  }

}
