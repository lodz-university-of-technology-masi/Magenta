import { Injectable } from '@angular/core';
import {UserService} from '../../user-edit/services/user.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';
import {NOT_FOUND_PAGE_URL} from '../../shared/utils/frontend-urls';
import {RedactorService} from './redactor.service';
import {UserUpdateData} from '../../models/user/user-update-data';

@Injectable({
  providedIn: 'root'
})
export class RedactorResolveService {

  constructor(private redactorService: RedactorService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot):
    Observable<UserUpdateData> | Promise<UserUpdateData> | UserUpdateData {
    const username = route.params['username'];
    if (username === undefined || username === null) {
      this.router.navigate([NOT_FOUND_PAGE_URL]);
      return null;
    }
    return this.redactorService.get(username)
      .toPromise()
      .then(result => {
        return result;
      });
  }
}
