import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../auth/services/auth.service";
import {AuthRequest} from "../auth/model/requests/auth-request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authRequest = {} as AuthRequest;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit() {
    if (this.loginForm.value.email != null && this.loginForm.value.password != null) {
      this.authRequest.username = this.loginForm.value.email
      this.authRequest.password = this.loginForm.value.password
    }
    this.authService.login(this.authRequest).subscribe((res) =>
    {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/list-agencies']).then(r => console.log('Login Succesfull'));
    });



  }


}
