import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  http = inject(HttpClient);

  baseUrl = `${environment.BASE_URL}properties/`;

  constructor() {}

  getPropertyList(): Observable<any> {
    const url = `${this.baseUrl}property/`;
    return this.http.get<any>(url);
  }

  getSingleProperty(id: number): Observable<any> {
    const url = `${this.baseUrl}property/${id}/`;
    return this.http.get<any>(url);
  }
}
