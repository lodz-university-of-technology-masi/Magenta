import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test, Tests} from '../../models/test';
import {TESTS_URL} from '../../shared/utils/backend-urls';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tests> {
    return this.http.get<Tests>(TESTS_URL);
  }
  get(id: number): Observable<Test> {
    return this.http.get<Test>(`${TESTS_URL}/${id}`);
  }
  create(test: Test): Observable<Test> {
    return this.http.post<Test>(TESTS_URL, test);
  }
  update(id: number, test: Test): Observable<Test> {
    return this.http.put<Test>(`${TESTS_URL}/${id}`, test);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${TESTS_URL}/${id}`);
  }
}
