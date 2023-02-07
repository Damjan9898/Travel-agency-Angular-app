import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TravelService } from './travel.service';
import { FilterComponent } from './filter/filter.component';
import { FiltriranjeComponent } from './filter/filtriranje/filtriranje.component';
import { PutovanjaComponent } from './filter/putovanja/putovanja.component';
import { MapComponent } from './filter/map/map.component';
import { TravelComponent } from './travel/travel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './auth/profile/profile.component';
import { KorpaComponent } from './korpa/korpa.component';
import { UserService } from './auth/user.service';
import { OtkazanoPutovanjeComponent } from './korpa/otkazano-putovanje/otkazano-putovanje.component';
import { PredstojecePutovanjeComponent } from './korpa/predstojece-putovanje/predstojece-putovanje.component';
import { ZavrsenoPutovanjeComponent } from './korpa/zavrseno-putovanje/zavrseno-putovanje.component';
import { RezervisiComponent } from './travel/rezervisi/rezervisi.component';
import { OtkaziPutovanjeComponent } from './korpa/predstojece-putovanje/otkazi-putovanje/otkazi-putovanje.component';
import { VecRezervisanoComponent } from './travel/rezervisi/vec-rezervisano/vec-rezervisano.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    FilterComponent,
    FiltriranjeComponent,
    PutovanjaComponent,
    MapComponent,
    TravelComponent,
    ProfileComponent,
    KorpaComponent,
    OtkazanoPutovanjeComponent,
    PredstojecePutovanjeComponent,
    ZavrsenoPutovanjeComponent,
    RezervisiComponent,
    OtkaziPutovanjeComponent,
    VecRezervisanoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [TravelService, UserService], 
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent]
 
})
export class AppModule { }
