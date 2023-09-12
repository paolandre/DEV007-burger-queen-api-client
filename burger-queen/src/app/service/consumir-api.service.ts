import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginI } from '../shared-components/interfaces/loginI';
import { ILoginRes } from '../shared-components/interfaces/ILoginRes';
import { OrderI } from '../shared-components/interfaces/IOrder';

@Injectable({
  providedIn: 'root',
})
export class ConsumirApiService {
  private apiUrl: string = 'http://127.0.0.1:8080';
  constructor(private http: HttpClient) {}

  login(form: LoginI): Observable<ILoginRes | string> {
    let url = this.apiUrl + '/login';
    return this.http.post<ILoginRes>(url, form).pipe(
      map((resp) => {
        return resp;
      }),
      catchError((err) => {
        return of(err.error);
      })
    );
  }
  getProducts(): Observable<any> {
    let url = this.apiUrl + '/products';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(url, { headers: headers });
  }

  getUsers(): Observable<any> {
    let url = this.apiUrl + '/users';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(url, { headers: headers });
  }

  getOrders(): Observable<any> {
    let url = this.apiUrl + '/orders';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.get(url, { headers: headers });
  }

  changeStatusOrders(id: string): Observable<any> {
    let url = this.apiUrl + '/orders/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    const requestData = {
      status: 'delivered',
      dateProcessed: new Date(),
    };

    return this.http.patch(url, requestData, { headers: headers });
  }

  postOrder(data: any): Observable<any> {
    let url = this.apiUrl + '/orders';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    const orderInfo = data;

    return this.http.post(url, orderInfo, { headers: headers });
  }

  postUser(data: any): Observable<any> {
    let url = this.apiUrl + '/users';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    const requestData = data;

    return this.http.post(url, requestData, { headers: headers });
  }

  deleteUser(id: any): Observable<any> {
    let url = this.apiUrl + '/users/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.delete(url, { headers: headers });
  }

  postProduct(data: any): Observable<any> {
    let url = this.apiUrl + '/products';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    const requestData = data;

    return this.http.post(url, requestData, { headers: headers });
  }

  getEspecificOrder(identificador: string): Observable<any> {
    let url = this.apiUrl + '/orders/' + identificador;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.get(url, { headers: headers });
  }

  deleteOrder(id: any): Observable<any> {
    let url = this.apiUrl + '/orders/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.delete(url, { headers: headers });
  }
}
