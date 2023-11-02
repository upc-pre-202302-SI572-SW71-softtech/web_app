import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {

    if (this.username === 'usuario' && this.password === 'contrasena') {
   
    } else {
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  }
}
