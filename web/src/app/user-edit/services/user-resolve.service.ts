import { Injectable } from '@angular/core';
import {User} from '../../models/user/user';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user.service';
import {NOT_FOUND_PAGE_URL} from '../../shared/utils/frontend-urls';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService {
  constructor(private userService: UserService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, username: string):
    Observable<User> | Promise<User> | User {
    if (username === undefined || username === null) {
      this.router.navigate([NOT_FOUND_PAGE_URL]);
      return null;
    }
    return this.userService.getUser(username)
      .toPromise()
      .then(result => {
        return result;
      });
  }
}
