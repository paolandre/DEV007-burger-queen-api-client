import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; //Agrega el modulo del formulario
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { WaiterComponent } from './views/waiter/waiter.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { TrashComponent } from './components/atoms/trash-icon/trash.component';
import { LogoComponent } from './components/atoms/small-logo/logo.component';
import { TwoButtonsComponent } from './components/molecules/two-buttons/two-buttons.component';
import { ContainerProductPriceComponent } from './components/molecules/container-product-price/container-product-price.component';
import { OrdersReadyComponent } from './components/molecules/orders-ready/orders-ready.component';
import { TotalBillAmountTitle } from './components/molecules/total-bill-amount-title/total-bill-amount.component';
import { PositiveNumberNegative } from './components/molecules/positive-number-negative/positive-number-negative.component';
import { ProductComponent } from './components/atoms/product/product.component';
import { PriceComponent } from './components/atoms/price/price.component';
import { KitchenButtonComponent } from './components/atoms/kitchen-button/kitchen-button.component';
import { TotalBillSum } from './components/molecules/total-bill-sum/total-bill-sum.component';
import { ModalComponent } from './shared-components/modal/modal.component';
import { TwoButtonsReusableComponent } from './components/molecules/container-product-price/two-buttons-reusable/two-buttons-reusable.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WaiterComponent,
    ButtonComponent,
    TrashComponent,
    LogoComponent,
    TwoButtonsComponent,
    ContainerProductPriceComponent,
    OrdersReadyComponent,
    PositiveNumberNegative,
    TotalBillAmountTitle,
    ProductComponent,
    PriceComponent,
    KitchenButtonComponent,
    TotalBillSum,
    ModalComponent,
    TwoButtonsReusableComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
