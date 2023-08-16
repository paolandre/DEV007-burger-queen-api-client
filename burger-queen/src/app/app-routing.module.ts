import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeseroComponent } from './mesero/mesero.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'mesero', component:MeseroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
