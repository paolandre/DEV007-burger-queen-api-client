import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginI } from '../shared-components/interfaces/loginI';
import { ILoginRes } from '../shared-components/interfaces/ILoginRes';

@Injectable({
  providedIn: 'root',
})
export class ConsumirApiService {
  private apiUrl: string = 'http://127.0.0.1:8080';
  constructor(private http: HttpClient) {}

  login(form: LoginI): Observable<ILoginRes | string> {
    let direcction = this.apiUrl + '/login';
    return this.http.post<ILoginRes>(direcction, form).pipe(
      map((resp) => {
        return resp;
      }),
      catchError((err) => {
        return of(err.error);
      })
    );
  }
  getOrders(): Observable<any> {
    let direcction = this.apiUrl + '/products';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(direcction, { headers: headers });
  }
}
