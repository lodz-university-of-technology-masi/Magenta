import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {SessionStorageService} from '../../shared/services/session-storage.service';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {Router} from '@angular/router';
import {LoginDetails} from '../../models/user/login-details';
import {LoggedUser} from '../../models/user/logged-user';
import {RegisterUserDetails} from '../../models/user/register-user-details';
import {LOGIN_URL, REGISTER_URL} from '../../shared/utils/backend-urls';

import {MODERATOR_PAGE_URL, REDACTOR_PAGE_URL, USER_PAGE_URL} from '../../shared/utils/frontend-urls';
import {ROLE_MODERATOR, ROLE_REDACTOR, ROLE_USER} from '../../shared/utils/global-variables';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient,
              private sessionStorage: SessionStorageService,
              private errorHandlingService: ErrorHandlingService,
              private router: Router) {
  }

  handleValidUser(response: HttpResponse<LoggedUser>): void {
    this.sessionStorage.storeSession(response.body,
      response.headers.get('Authorization'));
    switch (this.sessionStorage.getUser().roles[0].name) {
      case ROLE_USER:
        this.router.navigate([USER_PAGE_URL]);
        console.log('user');
        break;
      case ROLE_MODERATOR:
        this.router.navigate([MODERATOR_PAGE_URL]);
        console.log('moderator');
        break;
      case ROLE_REDACTOR:
        this.router.navigate([REDACTOR_PAGE_URL]);
        console.log('redactor');
        break;
    }
  }

  login(loginDetails: LoginDetails): void {
    this.httpClient.post(LOGIN_URL, loginDetails, {observe: 'response'})
      .subscribe((response: HttpResponse<LoggedUser>) => {
        this.handleValidUser(response);
      });
  }

  register(registerDetails: RegisterUserDetails): void {
    this.httpClient.post(REGISTER_URL, registerDetails, {observe: 'response'})
      .subscribe((response: HttpResponse<LoggedUser>) => {
        this.handleValidUser(response);
      });
  }

}
