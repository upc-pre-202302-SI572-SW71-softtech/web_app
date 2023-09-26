import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travels/travel.service';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-travel-description',
  templateUrl: './travel-description.component.html',
  styleUrls: ['./travel-description.component.css']
})
export class TravelDescriptionComponent implements OnInit {
  indice: number = -1
  travel: any = {}

  constructor(private travelService: TravelService) {

  }
  ngOnInit(): void {
    this.getTravels()
  }

  getTravels() {
    this.travelService.getTravels().subscribe(
      (travels) => {
        let aux: any = localStorage.getItem("indice-travel")
        this.indice = parseInt(aux)
        this.travel = travels[this.indice];
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
}
