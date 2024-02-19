import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/Types/schedules';
import { Router } from '@angular/router';
import { SchedulesService } from '../../shared/services/rutes.services';
import { AutenticacionService } from 'src/app/shared/services/auhtentication';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent {

  opciones = false
  datos_Schedules: Schedule[] = [];
  constructor(private route: Router, private SchedulesService: SchedulesService, private auth: AutenticacionService) {

  }


  ngOnInit(): void {
    this.SchedulesService.obtener_schedules(this.auth.getTokenFromCookie()?.usuario).subscribe({
      next: (productos) => {
        this.datos_Schedules = productos
        return;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  public opcionesclick() {
    this.opciones = !this.opciones
  }
  public cerrarsession() {
    //localStorage.removeItem('token')
    this.auth.removeTokenFromCookie()
    this.route.navigate(['/login']);
    return
  }

}
