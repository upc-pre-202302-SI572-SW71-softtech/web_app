import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Device } from '../../model/device';

@Component({
  selector: 'app-create-device-dialog',
  templateUrl: './create-device-dialog.component.html',
  styleUrls: ['./create-device-dialog.component.css']
})
export class CreateDeviceDialogComponent {
  constructor(public dialogRef: MatDialogRef<CreateDeviceDialogComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  newDeviceId: number = 0;
  newAgencyId: number = 1;
  newDeviceName: string = '';
  

  onCreateClick() {
    const newDevice: Device = { id: this.newDeviceId, agencyid: this.newAgencyId, name: this.newDeviceName };
    this.dialogRef.close(newDevice);
  }
}
