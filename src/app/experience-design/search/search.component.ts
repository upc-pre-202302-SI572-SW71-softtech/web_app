import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travels/travel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  travels: any[] = []; // Arreglo para almacenar los datos de viaje
  travelsAux: any[]=[];
  descriptions: any[] =[]
  nombreAgency: any = ""
  constructor(private travelService: TravelService, private router: Router) {
    
  }

  ngOnInit() {
    this.getTravels();
  }

  getTravels() {
    this.travelService.getTravels().subscribe(
      (travels) => {
        this.nombreAgency = localStorage.getItem("name-agency")
        this.travels = travels;
        this.travelsAux = travels;
        this.searchName()
        this.reduceCaracter();
        
      },
      (error) => {
        console.error('Error al obtener los viajes:', error);
      }
    );
  }

  searchName(){
    for(let i=0; i<this.travels.length;i++){
      if(this.travels[i].nombreAgencia==this.nombreAgency){
        
      }
      else{
        // console.log("eliminado: " + travel.nombreAgencia)
        // if(i>0)this.travels.splice(i-1,1)
        // else this.travels.splice(i,1)
        this.travels.splice(i,1)
        i--
      }
    }
  }

  reduceCaracter() {

    for(let i=0;i<this.travels.length; i++){
      this.descriptions.push(this.travels[i].descripcion)
    }

    // console.log("Descripciones: ")
    // console.log(this.descriptions)

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

    // console.log("Descripciones: ")
    // console.log(this.descriptions)
  }

  condition(e: number, texto: string) {
    if(e>=47) return true;
    if(e>texto.length) return true;
    return false;
  }

  seeDetails(titulo:any){
    console.log("titulo: "+titulo)
    let indice: number = -1
    console.log("arreglo travelaux: ")
    console.log(this.travelsAux)
    for(let i=0;i<this.travelsAux.length;i++){
      if(this.travelsAux[i].titulo===titulo){
        indice=i
      }
    }
    console.log("titulo indice: " + this.travelsAux[indice].titulo)
    localStorage.removeItem("indice-travel")
        localStorage.setItem("indice-travel",indice.toString())
        this.router.navigate(["/travel-description"])
  }

}


