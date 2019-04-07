import { Injectable } from '@angular/core';
import {ResetPasswordData} from '../../models/user/reset-password-data';
import {HttpClient} from '@angular/common/http';
import {PASSWORD_RESET_URL} from '../../shared/utils/backend-urls';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private httpClient: HttpClient) { }

  resetPassword(data: ResetPasswordData): Observable<any> {
    return this.httpClient.post(
      PASSWORD_RESET_URL,
      data
    );
  }
}
