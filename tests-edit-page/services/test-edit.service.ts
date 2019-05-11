import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {USERS_URL} from '../../shared/utils/backend-urls';
import {UserUpdateData} from '../../models/user/user-update-data';
import {LoggedUser} from '../../models/user/logged-user';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestEditService {

  constructor(private httpClient: HttpClient) { }

  deleteTest(username: string): Observable<any> {
    return this.httpClient.delete(
    );
  }

  assignTest(username: string): Observable<any> {
    return this.httpClient.assign(
    );
  }

}
