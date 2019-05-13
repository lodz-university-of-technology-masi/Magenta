import { Injectable } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Questions} from '../../models/question';
import {NOT_FOUND_PAGE_URL} from '../../shared/utils/frontend-urls';
import {TestService} from './test.service';

@Injectable({
  providedIn: 'root'
})
export class TestResolveService {

  constructor(private errorHandlingService: ErrorHandlingService,
              private testService: TestService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot)
    : Observable<Questions> | Promise<Questions> | Questions  {
    this.errorHandlingService.clear();
    let strId: string;
    strId = route.params['test'];
    let testId: number;
    if (strId === undefined) {
      testId = 1;
    } else {
      testId = +strId;
    }
    if (isNaN(testId) || testId < 1) {
      this.router.navigate([NOT_FOUND_PAGE_URL]);
      return {} as Questions;
    } else {
      return this.testService
        .get(testId)
        .toPromise()
        .then( result => {
          return result;
        }).catch(() => {
          return null;
        });
    }
  }
}
