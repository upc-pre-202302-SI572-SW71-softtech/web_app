import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Travel } from 'src/app/models/travel';
import { TravelService } from '../travels/travel.service';
import { Agency } from '../../models/agency';
import { Route, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.component.html',
  styleUrls: ['./create-travel.component.css']
})
export class CreateTravelComponent {
  nombreDelViaje: string = '';
  logoDelViaje: string = '';
  descripcion: string = '';
  estrellas: number = 0;
  precio: number = 0;
  ubicacion: string = '';
  fotoDePortada: string = '';
  foto1: string = '';
  foto2: string = '';
  foto3: string = '';
  foto4: string = '';
  fechaDeCreacion: Date = new Date();

  constructor(private serviceTravel: TravelService,
    public dialogRef: MatDialogRef<CreateTravelComponent>) { }

  guardarViaje() {
    const agency: Agency = {
      id: 1,
    };
    const datos: Travel = {
      name: this.nombreDelViaje,
      photoLogo: this.logoDelViaje,
      description: this.descripcion,
      stars: this.estrellas,
      price: this.precio,
      location: this.ubicacion,
      photoPortada: this.fotoDePortada,
      photo1: this.foto1,
      photo2: this.foto2,
      photo3: this.foto3,
      photo4: this.foto4,
      createdDate: this.fechaDeCreacion,
      agency: agency,
    };

    console.log(datos);
    this.serviceTravel.postCreateTravel(datos).subscribe(
      (data) => {
        console.log(data);
        this.dialogRef.close();
      },
      (error) => console.log(error)
    );

  }
  
}