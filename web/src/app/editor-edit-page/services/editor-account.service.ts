import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {USERS_URL} from '../../shared/utils/backend-urls';
import {UserUpdateData} from '../../models/user/user-update-data';
import {LoggedUser} from '../../models/user/logged-user';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditorAccountService {

  constructor(private httpClient: HttpClient) { }

  deleteAccount(username: string): Observable<any> {
    return this.httpClient.delete(
      `${USERS_URL}/${username}`
    );
  }

  addAccount(username: string): Observable<any> {
    return this.httpClient.post(
    );
  }
  modifyAccount(username: string, updateData: UserUpdateData): Observable<HttpResponse<LoggedUser>> {
    return this.httpClient.put<LoggedUser>(
      `${USERS_URL}/${username}`,
      updateData,
      {observe: 'response'}
    );
  }
}
