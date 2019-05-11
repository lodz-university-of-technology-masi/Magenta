import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Users} from '../../models/user/user';
import {USERS_URL} from '../../shared/utils/backend-urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<Users> {
    return this.httpClient.get<Users>(
      USERS_URL
    );
  }
}
