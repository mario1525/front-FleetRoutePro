import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from 'src/Types/schedules';


@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  private apiUrl = 'https://localhost:7069'; // Reemplaza con la URL real de tu backend

  constructor(private http: HttpClient) { }

  obtener_schedules(id: string | undefined): Observable<any> {
    const url = `${this.apiUrl}/api/Schedules/`;
    return this.http.get<Schedule[] | []>(url);
  }
}