import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from 'src/Types/Driver';
import { Vehicle } from 'src/Types/Vehicles';
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

  obtener_Drivers(): Observable<Driver[]> {
    const url = `${this.apiUrl}/api/Drivers/`;
    return this.http.get<Driver[]>(url);
  }

  obtener_Vehicles(): Observable<Vehicle[]> {
    const url = `${this.apiUrl}/api/Vehicles/`;
    return this.http.get<Vehicle[]>(url);
  }

  registrar_driver(driver: Driver): Observable<any> {
    const url = `${this.apiUrl}/api/Drivers`;
    return this.http.post(url, driver);
  }

  registrar_vehicle(vehicle: Vehicle): Observable<any> {
    const url = `${this.apiUrl}/api/Vehicles`;
    return this.http.post(url, vehicle);
  }

  registrar_rute(rute: Rute): Observable<any> {
    const url = `${this.apiUrl}/api/Routes`;
    return this.http.post(url, rute);
  }
}