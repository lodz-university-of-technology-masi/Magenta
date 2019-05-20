import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from '../../shared/services/session-storage.service';
import {Router} from '@angular/router';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {
  LOGIN_PAGE_URL,
  MAIN_PAGE_URL, MODERATOR_PAGE_URL, REDACTOR_PAGE_URL,
  REGISTER_PAGE_URL,
  USER_EDIT_PAGE_URL, USER_PAGE_URL
} from '../../shared/utils/frontend-urls';
import {ROLE_MODERATOR, ROLE_REDACTOR, ROLE_USER} from '../../shared/utils/global-variables';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mainPage = MAIN_PAGE_URL;
  loginPage = LOGIN_PAGE_URL;
  registerPage = REGISTER_PAGE_URL;
  loggedUserPage = USER_EDIT_PAGE_URL;

  constructor(private sessionStorage: SessionStorageService,
              private errorHandlingService: ErrorHandlingService,
              private router: Router) { }

  ngOnInit(): void {
  }
  isUserLoggedIn(): boolean {
    return this.sessionStorage.isUserLoggedIn();
  }
  logout(): void {
    this.sessionStorage.logout();
    this.router.navigate([this.mainPage]);
  }
  navigate(commands: any[]): void {
    this.errorHandlingService.clear();
    this.router.navigated = false;
    this.router.navigate(commands);
  }
  navigateToMainPage(): void {
    const role = this.sessionStorage.getUser().roles[0].name;
    switch (role) {
      case ROLE_REDACTOR:
        this.router.navigate([REDACTOR_PAGE_URL]);
        break;
      case ROLE_MODERATOR:
        this.router.navigate([MODERATOR_PAGE_URL]);
        break;
      case ROLE_USER:
        this.router.navigate([USER_PAGE_URL]);
        break;

    }
}
