import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './experience-design/agencies/agencies.component';
import { TravelsComponent } from './experience-design/travels/travels.component';
import { DevicesIotComponent } from './iot-managament/devices-iot/devices-iot.component';
import { TravelDescriptionComponent } from './experience-design/travel-description/travel-description.component';
import { SearchComponent } from './experience-design/search/search.component';
import { CreateTravelComponent } from './experience-design/create-travel/create-travel.component';
import { ProfileAgencyComponent } from './account-agency/profile-agency/profile-agency.component';
import { CreateActivitiesComponent } from './experience-design/create-activities/create-activities.component';
import {RegisterFormComponent} from "./auth/components/register-form/register-form.component";
import {PricingPageComponent} from "./experience-design/pages/pricing-page/pricing-page.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './xperience-desing/home/home.component';


const routes: Routes = [
  {path: 'list-agencies', component:AgenciesComponent},
  {path: 'list-travels', component:TravelsComponent},
  {path: 'list-devices-iot', component:DevicesIotComponent},
  {path: 'travel-description', component:TravelDescriptionComponent},
  {path: 'search-travels', component:SearchComponent},
  {path: 'create-travels', component:CreateTravelComponent},
  {path: 'profile-agency', component:ProfileAgencyComponent},
  {path: 'register', component:RegisterFormComponent},
  {path: 'pricing', component:PricingPageComponent},
  {path: 'create-activity', component:CreateActivitiesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
