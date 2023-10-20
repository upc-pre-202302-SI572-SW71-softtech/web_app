import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipService } from '../create-tip/tip.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivityService } from './activity.service';

@Component({
  selector: 'app-create-activities',
  templateUrl: './create-activities.component.html',
  styleUrls: ['./create-activities.component.css']
})
export class CreateActivitiesComponent {
  nombreDeLaActividad: string = '';
  descripcionDeLaActividad: string = '';

  constructor(private activityService: ActivityService,
    public dialogRef: MatDialogRef<CreateActivitiesComponent>) {}

  guardarActividad() {
    const datos = {
      name: this.nombreDeLaActividad,
      description: this.descripcionDeLaActividad,
      travel: {
        id: localStorage.getItem('indice-travel')
      }
    };

    console.log(datos);
    this.activityService.postCreateActivity(datos).subscribe(
      (response) => {
        console.log(response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error al crear la actividad:', error);
      }
    );
  }
}