import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travels/travel.service';
import { Router } from '@angular/router';
import { Agency } from 'src/app/models/agency';
import { AgencyService } from '../agencies/agency.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  travels: any[] = []; // Arreglo para almacenar los datos de viaje
  travelsAux: any[]=[];
  descriptions: any[] =[]
  agency: any = {}; 
  agencyId: any = ""
  constructor(private travelService: TravelService, private router: Router, private agencyService: AgencyService) {
    this.agencyId = localStorage.getItem("name-agency")
  }

  ngOnInit() {
    this.getAgencies();
  }
  
  getAgencies() {
    this.agencyService.getByid(this.agencyId).subscribe(
      (agency) => {
        this.agency = agency;
        this.travelsAux = this.agency.travels;
        this.reduceCaracter(); // Llamar a la función aquí después de obtener los viajes
      },
      (error) => {
        console.error('Error al obtener las agencias:', error);
      }
    );
  }


  reduceCaracter() {
    // Llenar el arreglo descriptions con las descripciones originales de travelsAux
    this.descriptions = this.travelsAux.map(travel => travel.description);
  
    // Actualizar cada descripción según las condiciones dadas
    this.descriptions = this.descriptions.map(description => {
      return description.length > 43 ? description.substring(0, 43) + '...' : description + '...';
    });
  }

  condition(e: number, texto: string) {
    if(e>=47) return true;
    if(e>texto.length) return true;
    return false;
  }

  seeDetails(id:any){
    
    localStorage.removeItem("indice-travel")
        localStorage.setItem("indice-travel",id.toString())
        this.router.navigate(["/travel-description"])
  }

}


