import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


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

  guardarViaje() {
    const datos = {
      nombreDelViaje: this.nombreDelViaje,
      logoDelViaje: this.logoDelViaje,
      descripcion: this.descripcion,
      estrellas: this.estrellas,
      precio: this.precio,
      ubicacion: this.ubicacion,
      fotoDePortada: this.fotoDePortada,
      foto1: this.foto1,
      foto2: this.foto2,
      foto3: this.foto3,
      foto4: this.foto4,
      fechaDeCreacion: this.fechaDeCreacion,
    };

    console.log(datos);
  }
  
}