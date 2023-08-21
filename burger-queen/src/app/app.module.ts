import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; //Agrega el modulo del formulario
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { WaiterComponent } from './views/waiter/waiter.component';
import { ModalComponent } from './shared-components/error-modal/error-modal.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { TrashComponent } from './components/atoms/trash-icon/trash.component';
import { LogoComponent } from './components/atoms/small-logo/logo.component';
import { TwoButtonsComponent } from './components/molecules/two-buttons/two-buttons.component';
import { ContainerProductPriceComponent } from './components/molecules/container-product-price/container-product-price.component';
import { OrdersReadyComponent } from './components/molecules/orders-ready/orders-ready.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WaiterComponent,
    ModalComponent,
    ButtonComponent,
    TrashComponent,
    LogoComponent,
    TwoButtonsComponent,
    ContainerProductPriceComponent,
    OrdersReadyComponent
  ],

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
export class AppModule { }
