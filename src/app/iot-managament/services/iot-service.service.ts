import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../model/device';

@Injectable({
  providedIn: 'root',
})
export class IotServiceService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl + 'devices');
  }

  createDevice(device: Device): Observable<any> {
    return this.http.post(this.baseUrl + 'devices', device);
  }

  deleteDevice(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}devices/${id}`);
  }
}
