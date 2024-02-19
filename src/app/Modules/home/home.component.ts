import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Schedule } from 'src/Types/schedules';
import { Observable , of } from 'rxjs';
import {rutesService} from '../../shared/services/Rute.servis'
import { Router } from '@angular/router';
import { Rute } from 'src/Types/Rute';
import { SchedulesService } from '../../shared/services/schedules.services';
import { AutenticacionService } from 'src/app/shared/services/auhtentication';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  opciones = false
  datos_Schedules: Schedule[] = [];
  rutas$: Observable<Rute[]> = of([]); ;
  constructor(private fb: FormBuilder, private route: Router, private SchedulesService: SchedulesService, private rutesService: rutesService , private auth: AutenticacionService) {

  }

  public myformulario!: FormGroup;
  title = 'Login';

  ngOnInit(): void {
    this.myformulario = this.createmyformulario();
    this.rutas$ = this.rutesService.obtener_Rutes();    
  }

  private createmyformulario() {
    return this.fb.group({
      RutaSeleccionada: ['', Validators.required],
      WeekNum: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Fromm: ['', Validators.required],
      Too: ['', Validators.required]
    });
  }

  public submitFormulario() {
    if (this.myformulario.valid) {
      alert("verificar datos")
      return
    }
  } 
  public cerrarsession() {
    //localStorage.removeItem('token')
    this.auth.removeTokenFromCookie()
    this.route.navigate(['/login']);
    return
  } 
}

