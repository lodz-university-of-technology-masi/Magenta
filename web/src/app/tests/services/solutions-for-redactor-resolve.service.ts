import { Injectable } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {QuestionService} from './question.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Solutions} from '../../models/question';
import {SolutionsService} from './solutions.service';

@Injectable({
  providedIn: 'root'
})
export class SolutionsForRedactorResolveService {

  constructor(private errorHandlingService: ErrorHandlingService,
              private solutionService: SolutionsService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot)
    : Observable<Solutions> | Promise<Solutions> | Solutions  {
    this.errorHandlingService.clear();
    return this.solutionService
      .getAllForRedactor()
      .toPromise()
      .then( result => {
        return result;
      }).catch(() => {
        return null;
      });
  }
}
