import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rute }  from 'src/Types/Rute';


@Injectable({
  providedIn: 'root'
})
export class rutesService {
  private apiUrl = 'https://localhost:7069'; // Reemplaza con la URL real de tu backend

  constructor(private http: HttpClient) { }

  obtener_Rutes(): Observable<Rute[]> {
    const url = `${this.apiUrl}/api/Routes/`;
    return this.http.get<Rute[]>(url);
  }
}