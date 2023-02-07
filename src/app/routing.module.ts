import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FilterComponent } from './filter/filter.component';
import { TravelComponent } from './travel/travel.component';
import { KorpaComponent } from './korpa/korpa.component';
import { ContactComponent } from "./contact/contact.component";


const rute: Routes = [
    /* rute / putanje ka komponentama*/
    { path: '', component: WelcomeComponent  },
    { path: 'signup', component: SignupComponent  },
    { path: 'login', component: LoginComponent  },
    { path: 'filter', component: FilterComponent  },
    { path: 'travel', component: TravelComponent  },
    { path: 'korpa', component: KorpaComponent  },
    { path: 'contact', component: ContactComponent  } 

]

@NgModule({
    /* modul za registraciju rutera */
    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]
})

export class RoutingModule {}