import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../model/device';

@Injectable({
  providedIn: 'root',
})
export class IotServiceService {

  private baseUrl = 'https://backendiot.onrender.com/api/';
  private endpoint = 'devices';

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl + this.endpoint);
  }

  createDevice(device: Device): Observable<any> {
    return this.http.post(this.baseUrl + this.endpoint, device);
  }

  deleteDevice(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${this.endpoint}/${id}`);
  }
}
