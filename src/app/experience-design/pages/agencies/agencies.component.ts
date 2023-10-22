import { Component, OnInit } from '@angular/core';import { AgencyService } from '../../../account-management/service/agency.service';
import { Agency } from 'src/app/account-management/model/agency';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
  agencies: Agency[] = [];

  constructor(private agencyService: AgencyService, private router: Router) { }

  ngOnInit() {
    this.getAgencies();
  }

  getAgencies() {
    this.agencyService.getAgencies().subscribe(
      (agencies) => {
        this.agencies = agencies;
        console.log(this.agencies)
      },
      (error) => {
        console.error('Error al obtener las agencias:', error);
      }
    );
  }

  search(id: any) {
    localStorage.setItem("name-agency", id)
    this.router.navigate(["/search-travels"])
  }

}
