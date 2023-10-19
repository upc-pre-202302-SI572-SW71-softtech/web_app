import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-tip',
  templateUrl: './create-tip.component.html',
  styleUrls: ['./create-tip.component.css']
})
export class CreateTipComponent {
  descripcionDeLaActividad: string = '';

  guardarTip() {
    const datos = {
      descripcionDeLaActividad: this.descripcionDeLaActividad,
    };

    console.log(datos);
  }
}
