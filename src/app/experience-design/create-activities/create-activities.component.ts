import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-activities',
  templateUrl: './create-activities.component.html',
  styleUrls: ['./create-activities.component.css']
})
export class CreateActivitiesComponent {
  nombreDeLaActividad: string = '';
  descripcionDeLaActividad: string = '';

  guardarActividad() {
    const datos = {
      nombreDeLaActividad: this.nombreDeLaActividad,
      descripcionDeLaActividad: this.descripcionDeLaActividad,
    };

    console.log(datos);
  }
}