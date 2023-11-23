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
import { IotMilestoneComponent } from './iot-managament/iot-milestone/iot-milestone.component';
import { MetricsDeviceComponent } from './iot-managament/pages/metrics-device/metrics-device.component';
import { UnauthorizedPageComponent } from './shared/unauthorized-page/unauthorized-page.component';
import {authPathGuard} from "./auth/guard/auth-path.guard";


const routes: Routes = [
  {path: 'list-agencies', component:AgenciesComponent, canActivate:[authPathGuard]},
  {path: 'list-travels', component:TravelsComponent,canActivate:[authPathGuard]},
  {path: 'list-devices-iot', component:DevicesIotComponent,canActivate:[authPathGuard]},
  {path: 'travel-description', component:TravelDescriptionComponent,canActivate:[authPathGuard]},
  {path: 'search-travels', component:SearchComponent,canActivate:[authPathGuard]},
  {path: 'create-travels', component:CreateTravelComponent,canActivate:[authPathGuard]},
  {path: 'profile-agency', component:ProfileAgencyComponent,canActivate:[authPathGuard]},
  {path: 'register', component:RegisterFormComponent,canActivate:[authPathGuard]},
  {path: 'pricing', component:PricingPageComponent,canActivate:[authPathGuard]},
  {path: 'create-activity', component:CreateActivitiesComponent,canActivate:[authPathGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,canActivate:[authPathGuard]},
  {path: 'iot-milestone', component: IotMilestoneComponent,canActivate:[authPathGuard]},
  { path: 'metrics-device/:id', component: MetricsDeviceComponent,canActivate:[authPathGuard] },
  {path: 'unauthorized', component: UnauthorizedPageComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
