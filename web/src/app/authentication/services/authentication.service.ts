import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {SessionStorageService} from '../../shared/services/session-storage.service';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {Router} from '@angular/router';
import {LoginDetails} from '../../models/user/login-details';
import {LoggedUser} from '../../models/user/logged-user';
import {RegisterUserDetails} from '../../models/user/register-user-details';
import {LOGIN_URL, REGISTER_URL} from '../../shared/utils/backend-urls';
import {MAIN_PAGE_URL, REDACTOR_PAGE_URL} from '../../shared/utils/frontend-urls';
import {ROLE_REDACTOR} from '../../shared/utils/global-variables';

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
    if (this.checkIfContainsRole(response, ROLE_REDACTOR)) {
      this.router.navigate([REDACTOR_PAGE_URL]);
    } else {
      this.router.navigate([MAIN_PAGE_URL]);
    }
  }

  private checkIfContainsRole(response: HttpResponse<LoggedUser>, checkingRole: String): Boolean {
    return response.body.roles.some(role => role.name === checkingRole);
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
