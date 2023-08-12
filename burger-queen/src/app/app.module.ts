import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MeseroComponent } from './mesero/mesero.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MeseroComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule], //Agrega el modulo del formulario
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
