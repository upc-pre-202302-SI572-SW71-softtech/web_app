import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private authService: AuthService) { }


  perfil(){
    this.router.navigate(['/profile-agency']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
