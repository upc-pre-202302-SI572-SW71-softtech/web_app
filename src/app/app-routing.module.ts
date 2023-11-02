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
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'list-agencies', component:AgenciesComponent},
  {path: 'list-travels', component:TravelsComponent},
  {path: 'list-devices-iot', component:DevicesIotComponent},
  {path: 'travel-description', component:TravelDescriptionComponent},
  {path: 'search-travels', component:SearchComponent},
  {path: 'create-travels', component:CreateTravelComponent},
  {path: 'profile-agency', component:ProfileAgencyComponent},
  {path: 'create-activity', component:CreateActivitiesComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'list-agencies', pathMatch: 'full'},
];

// const routes: Routes = [
//   {
//     path: 'home',
//     component: HomeComponent,
//     children: [
//       { path: 'list-agencies', component: AgenciesComponent },
//       { path: 'list-travels', component: TravelsComponent },
//       { path: 'list-devices-iot', component: DevicesIotComponent },
//       { path: 'travel-description', component: TravelDescriptionComponent },
//       { path: 'search-travels', component: SearchComponent },
//       { path: 'create-travels', component: CreateTravelComponent },
//       { path: 'profile-agency', component: ProfileAgencyComponent },
//       { path: 'create-activity', component: CreateActivitiesComponent },
//     ],
//   },
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
