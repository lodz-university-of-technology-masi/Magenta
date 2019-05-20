import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../../models/user/user';
import {REDACTOR_URL, REGISTER_URL, USERS_URL} from '../../shared/utils/backend-urls';
import {RegisterUserDetails} from '../../models/user/register-user-details';
import {LoggedUser} from '../../models/user/logged-user';

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
      `${REDACTOR_URL}/${username}`
    );
  }
  add(registerDetails: RegisterUserDetails): Observable<any> {
    return this.http.post(REDACTOR_URL, registerDetails);
  }
}
