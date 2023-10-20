import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travels/travel.service';
import { CreateActivitiesComponent } from '../create-activities/create-activities.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateTipComponent } from '../create-tip/create-tip.component';
import { TipService } from '../create-tip/tip.service';
import { ActivityService } from '../create-activities/activity.service';

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
    this.getTravel()
  }

  getTravel() {
    const aux: any = localStorage.getItem("indice-travel")
    // this.indice = parseInt(aux)
    this.travelService.getById(aux).subscribe(
      (travel) => {
        
        this.travel = travel;
        console.log(this.travel)
      },
      (error) => {
        console.error('Error al obtener los viajes:', error);
      }
    );
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
}
