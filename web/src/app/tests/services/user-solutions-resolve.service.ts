import { Injectable } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {SolutionsService} from './solutions.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Solutions} from '../../models/question';

@Injectable({
  providedIn: 'root'
})
export class UserSolutionsResolveService {

  constructor(private errorHandlingService: ErrorHandlingService,
              private solutionService: SolutionsService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot)
    : Observable<Solutions> | Promise<Solutions> | Solutions  {
    this.errorHandlingService.clear();
    return this.solutionService
      .getAllForUser()
      .toPromise()
      .then( result => {
        return result;
      }).catch(() => {
        return null;
      });
  }
}
