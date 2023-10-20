import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TipService } from './tip.service';

@Component({
  selector: 'app-create-tip',
  templateUrl: './create-tip.component.html',
  styleUrls: ['./create-tip.component.css']
})
export class CreateTipComponent {
  descripcionDeLaActividad: string = '';

  constructor(private tipService: TipService,
    public dialogRef: MatDialogRef<CreateTipComponent>) {}

  guardarTip() {
    const datos = {
      name: 'Tip',
      description: this.descripcionDeLaActividad,
      travel: {
        id: localStorage.getItem('indice-travel')
      }
    };

    console.log(datos);

    this.tipService.postCreateTip(datos).subscribe(
      (res) => {
        console.log(res);
        this.dialogRef.close();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
