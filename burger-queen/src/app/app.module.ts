import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; //Agrega el modulo del formulario
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MeseroComponent } from './mesero/mesero.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MeseroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ], //Agrega el modulos del formulario // Agrega httpClientModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
