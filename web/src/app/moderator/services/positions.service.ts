import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Position, Positions} from '../../models/positions';
import {ASSIGN_POSTFIX, POSITIONS_URL} from '../../shared/utils/backend-urls';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Positions> {
    return this.http.get<Positions>(POSITIONS_URL);
  }
  assign(testId: number, positionId: number): Observable<Position> {
    return this.http.put<Position>(`${POSITIONS_URL}/${ASSIGN_POSTFIX}/${positionId}?testId=${testId}`, null);
  }
  add(position: Position): Observable<Position> {
    return this.http.post<Position>(`${POSITIONS_URL}`, position);
  }
  setActive(positionId: number, active: boolean): Observable<Position> {
    return this.http.put<Position>(`${POSITIONS_URL}/${positionId}?active=${active}`, null);
  }
}
