import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from 'src/app/models/agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  
  private apiUrl = 'http://localhost:8080/api/agencies';

  constructor(private http: HttpClient) { }

  // Obtener todas las agencias
  getAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.apiUrl);
  }

  getByid(id: any): Observable<Agency> {
    return this.http.get<Agency>(`${this.apiUrl}/${id}`);
  }
}
