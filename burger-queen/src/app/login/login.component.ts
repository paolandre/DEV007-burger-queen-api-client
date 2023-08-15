import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsumirApiService } from '../service/consumir-api.service';
import { LoginI } from '../interfaces/loginI';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private consumirApi: ConsumirApiService) {}

  onLogin(form: any) {
    console.log(form);
    this.consumirApi.login(form).subscribe((data) => {
      console.log(data);
    });
  }
}
// isLoggedIn = false;
// userInfo: any = {};
// Almacenar el token u otros datos relevantes del token en el local storage o cookies si es necesario
//       console.log(response);
//       this.isLoggedIn = true;
//       this.getUserInfo();
//     },
//     (error) => {
//       console.error('Error al iniciar sesión:', error);
//     }
//   );
// }
//   getUserInfo() {
//     this.consumirApi.getUserInfo().subscribe(
//       (response) => {
//         this.userInfo = response;
//       },
//       (error) => {
//         console.error('Error al obtener información del usuario:', error);
//       }
//     );
//   }
// }

// logout() {
//   // Realiza las acciones necesarias para cerrar sesión en tu API
//   this.isLoggedIn = false;
//   this.userInfo = {};
//
