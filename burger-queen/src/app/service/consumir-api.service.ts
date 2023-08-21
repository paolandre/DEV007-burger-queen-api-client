import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginI } from '../shared-components/interfaces/loginI';
import { ResponceI } from '../shared-components/interfaces/respondeI';

@Injectable({
  providedIn: 'root',
})
export class ConsumirApiService {
  private apiUrl: string = 'http://127.0.0.1:8080';
  constructor(private http: HttpClient) { }

  login(form: LoginI): Observable<ResponceI> {
    let direcction = this.apiUrl + '/login';
    return this.http.post<ResponceI>(direcction, form).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error.ok);
        return throwError(error); // Transforma el error en un Observable de error
      })
    );
  }
  getOrders(): Observable<any> {
    let direcction = this.apiUrl + '/orders';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(direcction, { headers: headers })
  }
  // getUserInfo(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/user-info`);
  // }
}
