import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Param } from '../model/param';

@Injectable({
  providedIn: 'root'
})
export class ParamsServiceService {

  private baseUrl = 'https://backendiot.onrender.com/api/';
  private endpoint = 'devices/param'; // Updated endpoint

  constructor(private http: HttpClient) { }

  getParams(): Observable<Param[]> {
    return this.http.get<Param[]>(this.baseUrl + this.endpoint);
  }

  getParamById(id: number): Observable<Param> {
    return this.http.get<Param>(`${this.baseUrl}${this.endpoint}/${id}`);
  }
}
