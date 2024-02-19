import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/shared/services/auhtentication';
import {rutesService} from '../../shared/services/Rute.servis'
import { Driver } from 'src/Types/Driver';
import { Rute } from 'src/Types/Rute';
import { Vehicle } from 'src/Types/Vehicles';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  constructor(private fb: FormBuilder, private route: Router,  private rutesService: rutesService , private auth: AutenticacionService) {
  }

  public myformularioDriver!: FormGroup;
  public myformularioRute!: FormGroup;
  public myformularioVehicle!: FormGroup;

  ngOnInit(): void {
    this.myformularioDriver = this.createmyformularioDriver();
    this.myformularioVehicle = this.createmyformularioVehicle();
    this.myformularioRute = this.createmyformularioRute();
  }
  private createmyformularioVehicle() {
    return this.fb.group({
      ID: ['', Validators.required],
      Descriptionn: ['', Validators.required],
      Yearr: ['', Validators.required],
      Make: ['', Validators.required],
      Capacity: ['', Validators.required],
      Active: ['', Validators.required]
    });
  }

  private createmyformularioRute() {
    return this.fb.group({
      ID: ['', Validators.required],
      Descriptionn: ['', Validators.required],
      DriverId: ['', Validators.required],
      VehicleId: ['', Validators.required],
      Active: ['', Validators.required]
    });
  }

  private createmyformularioDriver() {
    return this.fb.group({
      ID: ['', Validators.required],
      Last_Name: ['', Validators.required],
      First_Name: ['', Validators.required],
      Ssn: ['', Validators.required],
      Dob: ['', Validators.required],
      Addresss: ['', Validators.required],
      City: ['', Validators.required],
      Zip: ['', Validators.required],
      Phone: ['', Validators.required],
      Active: ['', Validators.required]
    });
  }

  submitFormularioDriver() {
    if (this.myformularioDriver.valid) {
      const driver: Driver = this.myformularioDriver.value;
      this.rutesService.registrar_driver(driver).subscribe(
        (response) => {
          console.log('Conductor registrado exitosamente:', response);
          // Aquí puedes hacer algo con la respuesta, como redirigir a otra página
        },
        (error) => {
          console.error('Error al registrar conductor:', error);
          // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
        }
      );
    } else {
      console.error('Formulario de conductor no válido');
      // Aquí puedes manejar el caso en que el formulario no sea válido, como mostrar un mensaje de error al usuario
    }
  }
  submitFormularioVehicle() {
    if (this.myformularioVehicle.valid) {
      const vehicle: Vehicle = this.myformularioVehicle.value;
      this.rutesService.registrar_vehicle(vehicle).subscribe(
        (response) => {
          console.log('Vehículo registrado exitosamente:', response);
          // Aquí puedes hacer algo con la respuesta, como redirigir a otra página
        },
        (error) => {
          console.error('Error al registrar vehículo:', error);
          // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
        }
      );
    } else {
      console.error('Formulario de vehículo no válido');
      // Aquí puedes manejar el caso en que el formulario no sea válido, como mostrar un mensaje de error al usuario
    }
  }

  submitFormularioRute() {
    if (this.myformularioRute.valid) {
      const rute: Rute = this.myformularioRute.value;
      this.rutesService.registrar_rute(rute).subscribe(
        (response) => {
          console.log('Ruta registrada exitosamente:', response);
          // Aquí puedes hacer algo con la respuesta, como redirigir a otra página
        },
        (error) => {
          console.error('Error al registrar ruta:', error);
          // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
        }
      );
    } else {
      console.error('Formulario de ruta no válido');
      // Aquí puedes manejar el caso en que el formulario no sea válido, como mostrar un mensaje de error al usuario
    }

  } 
  

  public cerrarsession() {
    //localStorage.removeItem('token')
    this.auth.removeTokenFromCookie()
    this.route.navigate(['/login']);
    return
  } 
}
