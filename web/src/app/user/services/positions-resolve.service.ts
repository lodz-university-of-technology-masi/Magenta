import { Injectable } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {SolutionsService} from '../../tests/services/solutions.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Solutions} from '../../models/question';
import {Positions} from '../../models/positions';
import {PositionService} from './position.service';

@Injectable({
  providedIn: 'root'
})
export class PositionsResolveService {

  constructor(private errorHandlingService: ErrorHandlingService,
              private positionService: PositionService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    this.errorHandlingService.clear();
    return this.positionService
      .getAll()
      .toPromise()
      .then( result => {
        return result;
      }).catch(() => {
        return null;
      });
  }
}
