import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../../models/user/user';
import {REDACTOR_URL} from '../../shared/utils/backend-urls';

@Injectable({
  providedIn: 'root'
})
export class RedactorsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Users> {
    return this.http.get<Users>(REDACTOR_URL);
  }
}
