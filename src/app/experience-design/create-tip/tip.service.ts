import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipService {
  private apiUrl = 'http://localhost:8080/api/tip';

  constructor(private http: HttpClient) {}

  getTips(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postCreateTip(tip: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tip);
  }

  deleteTip(tipId: number): Observable<any> {
    const url = `${this.apiUrl}/${tipId}`;
    return this.http.delete<any>(url);
  }
}
