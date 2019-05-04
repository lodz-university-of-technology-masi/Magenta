import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PASSWORD_RESET_URL} from '../../shared/utils/backend-urls';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private httpClient: HttpClient) {
  }

  getTests(): Observable<any> {
    return this.httpClient.get(
      PASSWORD_RESET_URL // TODO change
    );
  }
}
