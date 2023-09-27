import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private apiUrl = 'http://localhost:3000/travels';

  constructor(private http: HttpClient) {}

  // Obtener todos los viajes
  getTravels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener viajes por ID de agencia
  getTravelsByAgencyId(agencyId: number): Observable<any[]> {
    const url = `${this.apiUrl}?agencyId=${agencyId}`;
    return this.http.get<any[]>(url);
  }

  // Obtener un viaje por ID
  getTravelById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // Agregar un nuevo viaje
  addTravel(travel: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, travel);
  }

  // Actualizar un viaje existente
  updateTravel(id: number, travel: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, travel);
  }

  // Eliminar un viaje
  deleteTravel(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
