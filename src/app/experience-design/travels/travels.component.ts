import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { TravelService } from './travel.service';
import { TestBed } from '@angular/core/testing';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  travels: Travel[] = []; // Arreglo para almacenar los datos de viaje
  descriptions: string[] =[]
  constructor(private travelService: TravelService, private router: Router) {
  }

  ngOnInit() {
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
    // Llenar el arreglo descriptions con las descripciones originales
    this.descriptions = this.travels.map(travel => travel.description);
  
    console.log("Descripciones originales: ");
    console.log(this.descriptions);
  
    // Actualizar cada descripción según las condiciones dadas
    this.descriptions = this.descriptions.map(description => {
      return description.length > 43 ? description.substring(0, 43) + '...' : description + '...';
    });
  
    console.log("Descripciones actualizadas: ");
    console.log(this.descriptions);
  }
  
  condition(e: number, texto: string) {
    if(e>=47) return true;
    if(e>texto.length) return true;
    return false;
  }

  seeDetails(i:any){
    localStorage.removeItem("indice-travel")
    localStorage.setItem("indice-travel",i)
    this.router.navigate(["/travel-description"])
  }

}
