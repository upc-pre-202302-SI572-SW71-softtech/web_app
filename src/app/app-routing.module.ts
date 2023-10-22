import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './experience-design/pages/agencies/agencies.component';
import { TravelsComponent } from './experience-design/pages/travels/travels.component';
import { DevicesIotComponent } from './iot-managament/pages/devices-iot/devices-iot.component';
import { TravelDescriptionComponent } from './experience-design/components/travel-description/travel-description.component';
import { SearchComponent } from './experience-design/components/search/search.component';
import { CreateTravelComponent } from './experience-design/components/create-travel/create-travel.component';
import { ProfileAgencyComponent } from './account-management/pages/profile-agency/profile-agency.component';

const routes: Routes = [
  {path: 'list-agencies', component:AgenciesComponent},
  {path: 'list-travels', component:TravelsComponent},
  {path: 'list-devices-iot', component:DevicesIotComponent},
  {path: 'travel-description', component:TravelDescriptionComponent},
  {path: 'search-travels', component:SearchComponent},
  {path: 'create-travels', component:CreateTravelComponent},
  {path: 'profile-agency', component:ProfileAgencyComponent},
  {path: '**', redirectTo: 'list-agencies', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
