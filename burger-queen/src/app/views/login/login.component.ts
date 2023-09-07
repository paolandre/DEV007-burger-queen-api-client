import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsumirApiService } from '../../service/consumir-api.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../../shared-components/modal-message/modal.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('modal') modal!: ModalComponent;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  errorMessage: string = '';

  constructor(
    private consumirApi: ConsumirApiService,
    private router: Router
  ) {}

  onLogin(form: any) {
    console.log(form);
    this.consumirApi.login(form).subscribe((resp) => {
      if (typeof resp === 'string') {
        console.log(resp);
        this.errorMessage = 'Error de datos para ingresar';
        this.modal.openModal();
      } else {
        console.log(resp);
        localStorage.setItem('token', resp.accessToken);
        localStorage.setItem('user_email', resp.user.email);
        localStorage.setItem('user_role', resp.user.role);
        if (resp.user.role == 'mesero') {
          this.router.navigate(['waiter']);
        } else if (resp.user.role === 'admin') {
          this.router.navigate(['admin']);
        } else if (resp.user.role === 'chef') {
          this.router.navigate(['chef']);
        }
      }
    });
  }
}
