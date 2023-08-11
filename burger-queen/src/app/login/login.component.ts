import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  probar(correo: string, contraseña: string) {
    alert('Tu correo es ' + correo + ' y tu contraseña es ' + contraseña);
  }
}
