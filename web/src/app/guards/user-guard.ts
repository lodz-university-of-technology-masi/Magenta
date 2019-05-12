import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {SessionStorageService} from '../shared/services/session-storage.service';
import {MAIN_PAGE_URL} from '../shared/utils/frontend-urls';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private sessionStorageService: SessionStorageService,
              private router: Router) {}

  canActivate(): boolean {
    if (this.sessionStorageService.isUser()) {
      return true;
    } else {
      this.router.navigate([MAIN_PAGE_URL]);
      return false;
    }
  }
}
