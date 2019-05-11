import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TESTS_URL} from '../../shared/utils/backend-urls';
import {Observable} from 'rxjs/Observable';
import {Test, Tests} from '../../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) {
  }

  getTests(): Observable<Tests> {
    return this.httpClient.get<Tests>(
      TESTS_URL
    );
  }

  deleteTest(id: number): Observable<any> {
    return this.httpClient.delete(
      `${TESTS_URL}/${id}`
    );
  }

  getTestDetails(id: number): Observable<[Test]> {
    return this.httpClient.get<[Test]>(
      `${TESTS_URL}/${id}`
    );
  }
}
