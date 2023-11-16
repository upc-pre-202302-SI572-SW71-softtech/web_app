import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private apiUrl = 'http://localhost:8080/api/travel'; 

  constructor(private http: HttpClient) {}

  // Obtener todos los viajes
  getTravels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener viajes por ID de agencia
  getById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  postCreateTravel(travel: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, travel);
  }

  deleteTravel(travelId: number): Observable<any> {
    const url = `${this.apiUrl}/${travelId}`;
    return this.http.delete<any>(url);
  }
}
