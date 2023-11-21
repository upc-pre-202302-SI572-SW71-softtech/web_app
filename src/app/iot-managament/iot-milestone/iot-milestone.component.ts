import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IotServiceService } from '../services/iot-service.service';
import { Device } from '../model/device';
import { CreateDeviceDialogComponent } from '../components/create-device-dialog/create-device-dialog.component';

@Component({
  selector: 'app-iot-milestone',
  templateUrl: './iot-milestone.component.html',
  styleUrls: ['./iot-milestone.component.css'],
})
export class IotMilestoneComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<Device>([]);
  private router: Router;
  updateSubscription: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    router: Router,
    private iotService: IotServiceService
  ) {
    this.router = router;
    this.updateSubscription = 0;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

    this.loadData();

    this.updateSubscription = setInterval(() => {
      this.loadData();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      clearInterval(this.updateSubscription);
    }
  }

  loadData(): void {
    this.iotService.getDevices().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  deleteDevice(id: number) {
    // Call your service method for deleting the device
    this.iotService.deleteDevice(id).subscribe(() => {
      this.loadData();
    });
  }

  viewMetrics(id: number) {
    if (id) {
      this.router.navigate(['/metrics-device', id]);
    }
  }

  addDevice(newDevice: Device) {
    const orderDevice: Device = {
      id: newDevice.id,
      agencyid: newDevice.agencyid,
      name: newDevice.name
    };

    console.log('Adding device:', orderDevice);

    this.iotService.createDevice(orderDevice).subscribe(
      () => {
        this.loadData();
      },
      (error) => {
        console.error('Error adding device:', error);
      }
    );
  }


  openDialog() {
    const dialogRef = this.dialog.open(CreateDeviceDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addDevice(result);
      }
    });
  }
}
