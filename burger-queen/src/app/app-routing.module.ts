import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaiterComponent } from './views/waiter/waiter.component';
import { LoginComponent } from './views/login/login.component';
import { ModalComponent } from './shared-components/error-modal/error-modal.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'waiter', component: WaiterComponent },
  { path: 'modal', component: ModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
