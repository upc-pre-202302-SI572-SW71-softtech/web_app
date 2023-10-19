import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travels/travel.service';
import { Travel } from 'src/app/models/travel';
import { Agency } from 'src/app/models/agency';
import { AgencyService } from '../agencies/agency.service';
import { CreateActivitiesComponent } from '../create-activities/create-activities.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateTipComponent } from '../create-tip/create-tip.component';

@Component({
  selector: 'app-travel-description',
  templateUrl: './travel-description.component.html',
  styleUrls: ['./travel-description.component.css']
})
export class TravelDescriptionComponent implements OnInit {
  indice: number = -1
  travel: any = {}
  agency: any = {};
  
  constructor(private travelService: TravelService, private agencyService: AgencyService,
    public dialog: MatDialog,public dialog2: MatDialog) {

  }
  ngOnInit(): void {
    this.getTravels()
    this.getAgencies()
  }

  getTravels() {
    this.travelService.getTravels().subscribe(
      (travels) => {
        let aux: any = localStorage.getItem("indice-travel")
        this.indice = parseInt(aux)
        this.travel = travels[this.indice-1];
        console.log("indice llegado: "+ this.indice)
        console.log("descripcion: " +travels[this.indice].titulo)
        console.log("el arreglo: ")
        console.log(travels)
      },
      (error) => {
        console.error('Error al obtener los viajes:', error);
      }
    );
  }

  getAgencies() {
    this.agencyService.getAgencies().subscribe(
      (agencies) => {
        this.agency = agencies[this.travel.agencyId-1];
      },
      (error) => {
        console.error('Error al obtener las agencias:', error);
      }
    );
  }

  openCreateActivityDialog(): void {
    const dialogRef = this.dialog.open(CreateActivitiesComponent, {
      width: 'auto',
      // data: { ... }  // Si quieres pasar datos al diálogo
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
      // Aquí puedes manejar lo que suceda después de cerrar el diálogo
    });
  }
  openCreateTipDialog(): void {
    const dialogRef2 = this.dialog2.open(CreateTipComponent, {
      width: 'auto',
      // data: { ... }  // Si quieres pasar datos al diálogo
    });
  
    dialogRef2.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
      // Aquí puedes manejar lo que suceda después de cerrar el diálogo
    });
  }
}
