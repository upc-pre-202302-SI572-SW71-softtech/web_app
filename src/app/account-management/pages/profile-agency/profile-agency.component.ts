import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyService } from 'src/app/account-management/service/agency.service';
import { Agency } from 'src/app/account-management/model/agency';

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

  indice: number = 0;

  constructor(private agencyService: AgencyService, private router: Router) { }

  ngOnInit() {
    // this.getAgencies();
    this.getAgency();
  }

  // getAgencies() {
  //   this.agencyService.getAgencies().subscribe(
  //     (agencies) => {
  //       this.agencies = agencies;
  //       console.log(this.agencies)
  //     },
  //     (error) => {
  //       console.error('Error al obtener las agencias:', error);
  //     }
  //   );
  // }

  getAgency() {
    this.agencyService.getAgencies().subscribe(
      (agencies) => {
        this.agency = agencies[this.indice];
        console.log(this.agencies)
      },
      (error) => {
        console.error('Error al obtener las agencias:', error);
      }
    );
  }

  // search(id: any) {
  //   localStorage.setItem("name-agency", id)
  //   this.router.navigate(["/search-travels"])
  // }

}
