import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {QuestionService} from './question.service';
import {Questions} from '../../models/question';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {Observable} from 'rxjs';
import {NOT_FOUND_PAGE_URL} from '../../shared/utils/frontend-urls';

@Injectable({
  providedIn: 'root'
})
export class QuestionResolveService {

  constructor(private errorHandlingService: ErrorHandlingService,
              private questionService: QuestionService,
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
      return this.questionService
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
