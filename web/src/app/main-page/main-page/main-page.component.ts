import { Component, OnInit } from '@angular/core';
import {MAIN_PAGE_URL, MODERATOR_PAGE_URL, REDACTOR_PAGE_URL, USER_PAGE_URL} from '../../shared/utils/frontend-urls';
import {Router} from '@angular/router';
import {ROLE_MODERATOR, ROLE_REDACTOR, ROLE_USER} from '../../shared/utils/global-variables';
import {SessionStorageService} from '../../shared/services/session-storage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  url = MAIN_PAGE_URL;

  constructor(private router: Router,
              private sessionStorage: SessionStorageService) {
  }

  ngOnInit(): void {
    if (this.sessionStorage.getUser() !== undefined && this.sessionStorage.getUser() !== null) {
      switch (this.sessionStorage.getUser().roles[0].name) {
        case ROLE_USER:
          this.router.navigate([USER_PAGE_URL]);
          break;
        case ROLE_MODERATOR:
          this.router.navigate([MODERATOR_PAGE_URL]);
          break;
        case ROLE_REDACTOR:
          this.router.navigate([REDACTOR_PAGE_URL]);
          break;
      }
    }
  }
}
