import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Questions, TestSolution, TestSolutionWithId} from '../../models/question';
import {QUESTIONS_POSTFIX, SOLUTIONS_POSTFIX, TESTS_URL, USERS_URL} from '../../shared/utils/backend-urls';
import {SessionStorageService} from '../../shared/services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient,
              private sessionStorageService: SessionStorageService) { }

  get(testId: number): Observable<Questions> {
    return this.http.get<Questions>(`${TESTS_URL}/${testId}/${QUESTIONS_POSTFIX}`);
  }
  save(testId: number, questions: Questions): Observable<Questions>  {
    return this.http.post<Questions>(`${TESTS_URL}/${testId}/${QUESTIONS_POSTFIX}`, questions);
  }
  sendSolution(solution: TestSolution): Observable<TestSolutionWithId> {
    return this.http.post<TestSolutionWithId>(
      `${USERS_URL}/${this.sessionStorageService.getUser().username}/${SOLUTIONS_POSTFIX}`,
      solution);
  }
}
