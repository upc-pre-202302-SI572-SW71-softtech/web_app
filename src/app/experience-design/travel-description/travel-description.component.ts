/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travels/travel.service';
import { CreateActivitiesComponent } from '../create-activities/create-activities.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateTipComponent } from '../create-tip/create-tip.component';
import { TipService } from '../create-tip/tip.service';
import { ActivityService } from '../create-activities/activity.service';

declare var google: any;

@Component({
  selector: 'app-travel-description',
  templateUrl: './travel-description.component.html',
  styleUrls: ['./travel-description.component.css']
})
export class TravelDescriptionComponent implements OnInit {
  indice: number = -1
  travel: any = {}
  agency: any = {};

  constructor(private travelService: TravelService,
    private tipService: TipService,
    private activityService: ActivityService,
    public dialog: MatDialog,
    public dialog2: MatDialog) {

  }
  ngOnInit(): void {
    this.getTravel();
  }

  getTravel() {
    const aux: any = localStorage.getItem("indice-travel")
    // this.indice = parseInt(aux)
    this.travelService.getById(aux).subscribe(
      (travel) => {

        this.travel = travel;
        console.log(this.travel)
        this.iniciarMap();
      },
      (error) => {
        console.error('Error al obtener los viajes:', error);
      }
    );
  }
  getRate(){
    return new Array(this.travel.rate);
  }
  getScreenWidth(){
    return window.innerWidth;
  }


  openCreateActivityDialog(): void {
    const dialogRef = this.dialog.open(CreateActivitiesComponent, {
      width: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
      this.getTravel();
    });
  }
  openCreateTipDialog(): void {
    const dialogRef2 = this.dialog2.open(CreateTipComponent, {
      width: 'auto',
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
      this.getTravel();
    });
  }

  deleteActivity(id: any) {
    this.activityService.deleteActivity(id).subscribe(
      (response) => {
        console.log(response);
        this.getTravel();
      },
      (error) => {
        console.error('Error al eliminar la actividad:', error);
      }
    );
  }

  deleteTip(id: any) {
    this.tipService.deleteTip(id).subscribe(
      (response) => {
        console.log(response);
        this.getTravel();
      },
      (error) => {
        console.error('Error al eliminar el tip:', error);
      }
    );
  }

iniciarMap() {
  if (this.travel && this.travel.location) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': this.travel.location }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: results[0].geometry.location
        });
        new google.maps.Marker({
          position: results[0].geometry.location,
          map: map
        });
      } else {
        console.error('Geocode no fue exitoso por la siguiente razón: ' + status);
      }
    });
  } else {
    console.error('No hay información de ubicación disponible');
  }
}

  getSecondaryImages() {
    return [this.travel.photo1,this.travel.photo2,this.travel.photo3,this.travel.photo4];
  }
}
