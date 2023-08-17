import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginI } from '../interfaces/loginI';
import { ResponceI } from '../interfaces/respondeI';

@Injectable({
  providedIn: 'root',
})
export class ConsumirApiService {
  private apiUrl: string = 'http://127.0.0.1:8080';
  constructor(private http: HttpClient) {}

  login(form: LoginI): Observable<ResponceI> {
    let direcction = this.apiUrl + '/login';
    return this.http.post<ResponceI>(direcction, form).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error.ok);
        return throwError(error); // Transforma el error en un Observable de error
      })
    );
  }
  // getUserInfo(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/user-info`);
  // }
}
