import { Injectable } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PositionsService} from './positions.service';
import {Positions} from '../../models/positions';

@Injectable({
  providedIn: 'root'
})
export class PositionsResolveService implements Resolve<Positions> {

  constructor(private errorHandlingService: ErrorHandlingService,
              private positionsService: PositionsService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot)
    : Observable<Positions> | Promise<Positions> | Positions  {
    this.errorHandlingService.clear();
    return this.positionsService
      .getPositions()
      .toPromise()
      .then( result => {
        return result;
      }).catch(() => {
        return null;
      });
  }
}
