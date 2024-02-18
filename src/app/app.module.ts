import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modules/login/login.component';
import { ClientHomeComponent } from './Modules/client-home/client-home.component';
import { UserHomeComponent } from './Modules/user-home/user-home.component';
import { SchedulesComponent } from './Modules/schedules/schedules.component';
import { HomeComponent } from './Modules/home/home.component';
import { UsersComponent } from './Modules/users/users.component';
import { DriversComponent } from './Modules/drivers/drivers.component';
import { VehiclesComponent } from './Modules/vehicles/vehicles.component';
import { RouteComponent } from './Modules/route/route.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientHomeComponent,
    UserHomeComponent,
    SchedulesComponent,
    HomeComponent,
    UsersComponent,
    DriversComponent,
    VehiclesComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,        
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
