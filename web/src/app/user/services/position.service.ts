import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Positions} from '../../models/positions';
import {POSITIONS_URL, TESTS_POSTFIX} from '../../shared/utils/backend-urls';
import {SessionStorageService} from '../../shared/services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient,
              private sessionStorageService: SessionStorageService) { }

  getAll(): Observable<Positions> {
    return this.http.get<Positions>(`${POSITIONS_URL}/${TESTS_POSTFIX}?language=${this.sessionStorageService.getUser().language}`);
  }
}
