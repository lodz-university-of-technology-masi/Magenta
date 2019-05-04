import { Injectable } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {QuestionService} from './question.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Solutions} from '../../models/question';

@Injectable({
  providedIn: 'root'
})
export class SolutionsForRedactorResolveService {

  constructor(private errorHandlingService: ErrorHandlingService,
              private questionService: QuestionService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot)
    : Observable<Solutions> | Promise<Solutions> | Solutions  {
    this.errorHandlingService.clear();
    return this.questionService
      .getAllForRedactor()
      .toPromise()
      .then( result => {
        return result;
      }).catch(() => {
        return null;
      });
  }
}
