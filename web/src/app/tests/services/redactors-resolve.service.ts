import { Injectable } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {TestService} from './test.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Tests} from '../../models/test';
import {RedactorsService} from './redactors.service';
import {Users} from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class RedactorsResolveService {

  constructor(private errorHandlingService: ErrorHandlingService,
              private redactorsService: RedactorsService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot)
    : Observable<Users> | Promise<Users> | Users  {
    this.errorHandlingService.clear();
    return this.redactorsService
      .getAll()
      .toPromise()
      .then( result => {
        return result;
      }).catch(() => {
        return null;
      });
  }
}
