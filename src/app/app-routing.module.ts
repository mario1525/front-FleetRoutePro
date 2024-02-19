import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Modules/login/login.component';
import { ClientHomeComponent } from './Modules/client-home/client-home.component';
import { UserHomeComponent } from './Modules/user-home/user-home.component';
import { SchedulesComponent } from './Modules/schedules/schedules.component';
import { HomeComponent } from './Modules/home/home.component';
import { UsersComponent } from './Modules/users/users.component';
import { DriversComponent } from './Modules/drivers/drivers.component';
import { VehiclesComponent } from './Modules/vehicles/vehicles.component';
import { RouteComponent } from './Modules/route/route.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user/home', component: UserHomeComponent },
  { path: 'client/home', component: ClientHomeComponent },
  { path: 'Schedules', component: SchedulesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'Route', component: RouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
