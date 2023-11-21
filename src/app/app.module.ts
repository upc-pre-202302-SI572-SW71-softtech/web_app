import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './experience-design/header/header.component';
import { TravelsComponent } from './experience-design/travels/travels.component';
import { AgenciesComponent } from './experience-design/agencies/agencies.component';
import { PricingCardComponent } from './experience-design/components/pricing-card/pricing-card.component';
// angular material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DevicesIotComponent } from './iot-managament/devices-iot/devices-iot.component';
import { TravelDescriptionComponent } from './experience-design/travel-description/travel-description.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './experience-design/search/search.component';
import {MatInputModule} from '@angular/material/input';
import { CreateTravelComponent } from './experience-design/create-travel/create-travel.component';
import { ProfileAgencyComponent } from './account-agency/profile-agency/profile-agency.component';

import {MatDialogModule} from '@angular/material/dialog';
import { CreateActivitiesComponent } from './experience-design/create-activities/create-activities.component';
import { CreateTipComponent } from './experience-design/create-tip/create-tip.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterFormComponent } from './auth/components/register-form/register-form.component';
import { PricingPageComponent } from './experience-design/pages/pricing-page/pricing-page.component';
import { HomeComponent } from './xperience-desing/home/home.component';
import { IotMilestoneComponent } from './iot-managament/iot-milestone/iot-milestone.component';
import { CreateDeviceDialogComponent } from './iot-managament/components/create-device-dialog/create-device-dialog.component';
import { MetricsDeviceComponent } from './iot-managament/pages/metrics-device/metrics-device.component';
// import { CanvasJS } from 'canvasjs';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { TravelCardComponent } from './experience-design/components/travel-card/travel-card.component';
import {NgOptimizedImage} from "@angular/common";

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
    CreateActivitiesComponent,
    CreateTipComponent,
    RegisterFormComponent,
    PricingPageComponent,
    PricingCardComponent,
    LoginComponent,
    HomeComponent,
    IotMilestoneComponent,
    CreateDeviceDialogComponent,
    MetricsDeviceComponent,
    TravelCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    CanvasJSAngularChartsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
