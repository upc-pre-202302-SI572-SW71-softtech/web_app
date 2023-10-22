import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {Agency} from "../../model/agency";
import {TravelService} from "../../../experience-design/services/travel.service";
import {AgencyService} from "../../service/agency.service";
import {CreateTravelComponent} from "../../../experience-design/components/create-travel/create-travel.component";
@Component({
  selector: 'app-profile-agency',
  templateUrl: './profile-agency.component.html',
  styleUrls: ['./profile-agency.component.css']
})
export class ProfileAgencyComponent implements OnInit {
  agencies: Agency[] = [];
  agency: Agency = {
    id: 0,
    nombre: '',
    logo: '',
    correo: '',
    descripcion: '',
    ubicacion: '',
    ruc: 0,
    telefono: 0
  };
  travels: any[] = []; // Arreglo para almacenar los datos de viaje
  descriptions: any[] =[]

  indice: number = 0;

  constructor(private travelService: TravelService,private agencyService: AgencyService, private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getAgency();
    this.getTravels();
  }

  getTravels() {
    this.travelService.getTravels().subscribe(
      (travels) => {
        this.travels = travels;
        console.log(this.travels)
        this.reduceCaracter();
      },
      (error) => {
        console.error('Error al obtener los viajes:', error);
      }
    );
  }

  reduceCaracter() {

    for(let i=0;i<this.travels.length; i++){
      this.descriptions.push(this.travels[i].descripcion)
    }

    console.log("Descripciones: ")
    console.log(this.descriptions)

    for (let i = 0; i< this.travels.length; i++){
      let texto = this.descriptions[i]
      let aux: string = ""
      let e:number = 0
      while(!this.condition(e, texto)){
        aux = aux + texto[e]
        e++
      }
      this.descriptions[i] = aux + "..."
    }
  }

  condition(e: number, texto: string) {
    if(e>=47) return true;
    return e > texto.length;

  }

  seeDetails(i:any){
    localStorage.removeItem("indice-travel")
    localStorage.setItem("indice-travel",i)
    this.router.navigate(["/travel-description"])
  }

  getAgency() {
    this.agencyService.getAgencies().subscribe(
      (agencies) => {
        this.agency = agencies[this.indice];
      },
      (error) => {
        console.error('Error al obtener las agencias:', error);
      }
    );
  }

  openCreateTravelDialog(): void {
    const dialogRef = this.dialog.open(CreateTravelComponent, {
      width: 'auto',
      // data: { ... }  // Si quieres pasar datos al diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
      // Aquí puedes manejar lo que suceda después de cerrar el diálogo
    });
  }
}
