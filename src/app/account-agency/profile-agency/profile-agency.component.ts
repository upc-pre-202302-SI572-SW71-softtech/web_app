import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgencyService } from 'src/app/experience-design/agencies/agency.service';
import { CreateTravelComponent } from 'src/app/experience-design/create-travel/create-travel.component';
import { TravelService } from 'src/app/experience-design/travels/travel.service';
import { Agency } from 'src/app/models/agency';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-profile-agency',
  templateUrl: './profile-agency.component.html',
  styleUrls: ['./profile-agency.component.css']
})
export class ProfileAgencyComponent implements OnInit {
  agency: Agency = {};

  indice: number = 0;

  constructor(private travelService: TravelService,private agencyService: AgencyService, private router: Router,
    public dialog: MatDialog,
    ) { }

  ngOnInit() {
    this.getAgency();
  }

  

  getAgency() {
    this.agencyService.getByid(1).subscribe(
      (response) => {
        this.agency = response;
        console.log(this.agency);
      },
      (error) => {
        console.error('Error al obtener la agencia:', error);
      }
    );
  }
  
  openCreateTravelDialog(): void {
    const dialogRef = this.dialog.open(CreateTravelComponent, {
      width: 'auto',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
      this.getAgency();
    });
    
  }

  deleteTravel(id: any) {
    this.travelService.deleteTravel(id).subscribe(
      (response) => {
        console.log(response);
        this.getAgency();
      },
      (error) => {
        console.error('Error al eliminar el viaje:', error);
      }
    );
  }

  seeDetails(i:any){
    localStorage.removeItem("indice-travel")
    localStorage.setItem("indice-travel",i)
    console.log(i)
    this.router.navigate(["/travel-description"])
  }
}
