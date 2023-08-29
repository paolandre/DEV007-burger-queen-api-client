import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaiterComponent } from './views/waiter/waiter.component';
import { LoginComponent } from './views/login/login.component';
import { ChefComponent } from './views/chef/chef.component';
import { AdminMenuComponent } from './views/admin-menu/admin-menu.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'waiter', component: WaiterComponent },
  { path: 'chef', component: ChefComponent },
  { path: 'admin', component: AdminMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
