import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Questions} from '../../models/question';
import {QUESTION_POSTFIX, TESTS_URL} from '../../shared/utils/backend-urls';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  get(testId: number): Observable<Questions> {
    return this.http.get<Questions>(`${TESTS_URL}/${testId}/${QUESTION_POSTFIX}`);
  }
}
