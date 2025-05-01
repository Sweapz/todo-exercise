import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url) as Observable<T>;
  }

  // public post<T>(url: string, body: any): Observable<T> {
  //   return this.httpClient.post<T>(url, body) as Observable<T>;
  // }

  // public put<T>(url: string, body: any): Observable<T> {
  //   return this.httpClient.put<T>(url, body) as Observable<T>;
  // }

  // public delete<T>(url: string, options?: Options): Observable<T> {
  //   return this.httpClient.get<T>(url, options) as Observable<T>;
  // }
}