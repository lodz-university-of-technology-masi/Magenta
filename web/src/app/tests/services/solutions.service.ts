import { Injectable } from '@angular/core';
import {Score, Solutions, TestSolution, TestSolutionWithId} from '../../models/question';
import {Observable} from 'rxjs';
import {EMAIL_POSTFIX, SOLUTIONS_POSTFIX, SOLUTIONS_URL, USERS_URL} from '../../shared/utils/backend-urls';
import {HttpClient} from '@angular/common/http';
import {SessionStorageService} from '../../shared/services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {

  constructor(private http: HttpClient,
              private sessionStorageService: SessionStorageService) { }

  sendSolution(solution: TestSolution): Observable<TestSolutionWithId> {
    return this.http.post<TestSolutionWithId>(
      `${USERS_URL}/${this.sessionStorageService.getUser().username}/${SOLUTIONS_POSTFIX}`,
      solution);
  }
  getAllForRedactor(): Observable<Solutions> {
    return this.http.get<Solutions>(`${SOLUTIONS_URL}`);
  }
  getAllForUser(): Observable<Solutions> {
    return this.http.get<Solutions>(`${USERS_URL}/${this.sessionStorageService.getUser().username}/${SOLUTIONS_POSTFIX}`);
  }
  getSolution(id: number): Observable<TestSolutionWithId> {
    return this.http.get<TestSolutionWithId>(`${SOLUTIONS_URL}/${id}`);
  }
  sendScore(id: number, score: Score): Observable<Score> {
    return this.http.put<Score>(
      `${SOLUTIONS_URL}/${id}`,
      score);
  }
  sendEmail(id: number): Observable<any> {
    return this.http.post<any>(
      `${SOLUTIONS_URL}/${id}/${EMAIL_POSTFIX}`,
      null);
  }
}
