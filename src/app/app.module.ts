import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './public/components/header/header.component';
import { TravelsComponent } from './experience-design/pages/travels/travels.component';
import { AgenciesComponent } from './experience-design/pages/agencies/agencies.component';

// angular material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { DevicesIotComponent } from './iot-managament/pages/devices-iot/devices-iot.component';
import { TravelDescriptionComponent } from './experience-design/components/travel-description/travel-description.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './experience-design/components/search/search.component';
import {MatInputModule} from '@angular/material/input';
import { CreateTravelComponent } from './experience-design/components/create-travel/create-travel.component';
import { ProfileAgencyComponent } from './account-management/pages/profile-agency/profile-agency.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TravelsComponent,
    AgenciesComponent,
    DevicesIotComponent,
    TravelDescriptionComponent,
    SearchComponent,
    CreateTravelComponent,
    ProfileAgencyComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
