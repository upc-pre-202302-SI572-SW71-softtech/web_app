import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from 'src/app/models/agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  private apiUrl = 'http://localhost:3000/agencies'; // Cambia la URL según la ubicación de tu servidor JSON

  constructor(private http: HttpClient) { }

  // Obtener todas las agencias
  getAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.apiUrl);
  }

  // Obtener una agencia por su ID
  getAgencyById(id: number): Observable<Agency> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Agency>(url);
  }

  // Crear una nueva agencia
  createAgency(agency: Agency): Observable<Agency> {
    return this.http.post<Agency>(this.apiUrl, agency);
  }

  // Actualizar una agencia existente
  // updateAgency(agency: Agency): Observable<Agency> {
  //   const url = `${this.apiUrl}/${agency.id}`;
  //   return this.http.put<Agency>(url, agency);
  // }

  // Eliminar una agencia por su ID
  deleteAgency(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
