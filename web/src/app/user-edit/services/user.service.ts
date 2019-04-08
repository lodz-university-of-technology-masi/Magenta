import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../models/user/user';
import {USERS_URL} from '../../shared/utils/backend-urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(
      USERS_URL + `/${username}`
    );
  }
}
