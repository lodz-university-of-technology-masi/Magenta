import { Injectable } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';

import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Users} from '../../models/user/user';
import {RedactorService} from './redactor.service';

@Injectable({
  providedIn: 'root'
})
export class RedactorsResolveService {

  constructor(private errorHandlingService: ErrorHandlingService,
              private redactorService: RedactorService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot)
    : Observable<Users> | Promise<Users> | Users  {
    this.errorHandlingService.clear();
    return this.redactorService
      .getAll()
      .toPromise()
      .then( result => {
        return result;
      }).catch(() => {
        return null;
      });
  }
}
