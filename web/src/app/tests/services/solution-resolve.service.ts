import { Injectable } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {QuestionService} from './question.service';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TestSolutionWithId} from '../../models/question';
import {NOT_FOUND_PAGE_URL} from '../../shared/utils/frontend-urls';

@Injectable({
  providedIn: 'root'
})
export class SolutionResolveService {

  constructor(private errorHandlingService: ErrorHandlingService,
              private questionService: QuestionService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot)
    : Observable<TestSolutionWithId> | Promise<TestSolutionWithId> | TestSolutionWithId  {
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
      return {} as TestSolutionWithId;
    } else {
      return this.questionService
        .getSolution(testId)
        .toPromise()
        .then( result => {
          return result;
        }).catch(() => {
          return null;
        });
    }
  }
}
