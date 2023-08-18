import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeseroComponent } from './mesero/mesero.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './components/moleculas/error-modal/error-modal.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'mesero', component:MeseroComponent},
  {path:'modal', component:ModalComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
