import { Injectable } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {SolutionsService} from './solutions.service';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Solutions} from '../../models/question';
import {TestService} from './test.service';
import {Tests} from '../../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestsResolveService implements Resolve<Tests> {

  constructor(private errorHandlingService: ErrorHandlingService,
              private testService: TestService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot)
    : Observable<Tests> | Promise<Tests> | Tests  {
    this.errorHandlingService.clear();
    return this.testService
      .getAll()
      .toPromise()
      .then( result => {
        return result;
      }).catch(() => {
        return null;
      });
  }
}
