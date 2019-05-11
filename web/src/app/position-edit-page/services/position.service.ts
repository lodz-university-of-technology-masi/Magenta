import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {USERS_URL} from '../../shared/utils/backend-urls';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private httpClient: HttpClient) { }

  deactivatePosition(position_name: string): Observable<any> {
    return this.httpClient.deactivate(

    );
  }

  activatePosition(position_name: string): Observable<any> {
    return this.httpClient.activate(

    );
  }
}
