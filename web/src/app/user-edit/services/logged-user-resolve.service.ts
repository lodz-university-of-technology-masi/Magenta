import { Injectable } from '@angular/core';
import {UserResolveService} from './user-resolve.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../../models/user/user';
import {Observable} from 'rxjs/Observable';
import {SessionStorageService} from '../../shared/services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserResolveService implements Resolve<User> {

  constructor(private usersResolveService: UserResolveService,
              private sessionStorageService: SessionStorageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<User> | Promise<User> | User {
    const username = this.sessionStorageService.getUser().username;
    return this.usersResolveService.resolve(route, username);
  }
}
