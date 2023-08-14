import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from '../interfaces/loginI';
import { ResponceI } from '../interfaces/respondeI';

@Injectable({
  providedIn: 'root',
})
export class ConsumirApiService {
  private apiUrl: string =
    'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0';
  constructor(private http: HttpClient) {}

  login(form: LoginI): Observable<ResponceI> {
    let direcction = this.apiUrl + '/login';
    return this.http.post<ResponceI>(direcction, form);
  }
  // getUserInfo(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/user-info`);
  // }
}
