import { Injectable } from '@angular/core';
import {PasswordChange} from '../../models/user/password-change';
import {Observable} from 'rxjs/Observable';
import {PASSWORD_POSTFIX, USERS_URL} from '../../shared/utils/backend-urls';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private httpClient: HttpClient) { }

  changePassword(username: string, passwordChange: PasswordChange): Observable<any> {
    return this.httpClient.post(
      `${USERS_URL}/${username}/${PASSWORD_POSTFIX}`,
      passwordChange
    );
  }
}
