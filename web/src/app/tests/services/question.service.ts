import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Questions, Score, Solutions, TestSolution, TestSolutionWithId} from '../../models/question';
import {QUESTIONS_POSTFIX, SOLUTIONS_POSTFIX, SOLUTIONS_URL, TESTS_URL, USERS_URL} from '../../shared/utils/backend-urls';
import {SessionStorageService} from '../../shared/services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  get(testId: number): Observable<Questions> {
    return this.http.get<Questions>(`${TESTS_URL}/${testId}/${QUESTIONS_POSTFIX}`);
  }
  save(testId: number, questions: Questions): Observable<Questions>  {
    return this.http.post<Questions>(`${TESTS_URL}/${testId}/${QUESTIONS_POSTFIX}`, questions);
  }
}
