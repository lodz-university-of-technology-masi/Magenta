import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../../models/user/user';
import {REDACTOR_URL, USERS_URL} from '../../shared/utils/backend-urls';

@Injectable({
  providedIn: 'root'
})
export class RedactorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Users> {
    return this.http.get<Users>(REDACTOR_URL);
  }
  delete(username: string): Observable<any> {
    return this.http.delete(
      `${USERS_URL}/${username}`
    );
  }
}
