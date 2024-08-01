import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  baseUrl = `${environment.BASE_URL}auth/`;

  getSingleEmployee(id: number): Observable<any> {
    const url = `${this.baseUrl}user/${id}/`;
    return this.http.get<any>(url);
  }
}
