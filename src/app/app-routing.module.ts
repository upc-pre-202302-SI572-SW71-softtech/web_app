import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './experience-design/agencies/agencies.component';
import { TravelsComponent } from './experience-design/travels/travels.component';
import { DevicesIotComponent } from './iot-managament/devices-iot/devices-iot.component';
import { TravelDescriptionComponent } from './experience-design/travel-description/travel-description.component';

const routes: Routes = [
  {path: 'list-agencies', component:AgenciesComponent},
  {path: 'list-travels', component:TravelsComponent},
  {path: 'list-devices-iot', component:DevicesIotComponent},
  {path: 'travel-description', component:TravelDescriptionComponent},
  {path: '**', redirectTo: 'list-agencies', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
