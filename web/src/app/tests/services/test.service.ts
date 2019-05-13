import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test, Tests} from '../../models/test';
import {SYNONYMS_UTILS_URL, TESTS_URL, TRANSLATE_UTILS_URL, WIKIPEDIA_UTILS_URL} from '../../shared/utils/backend-urls';
import {SessionStorageService} from '../../shared/services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient,
              private sessionStorageService: SessionStorageService) {
  }

  getAll(): Observable<Tests> {
    return this.http.get<Tests>(TESTS_URL);
  }

  get(id: number): Observable<Test> {
    return this.http.get<Test>(`${TESTS_URL}/${id}`);
  }

  create(test: Test): Observable<Test> {
    return this.http.post<Test>(`${TESTS_URL}?username=${this.sessionStorageService.getUser().username}`, test);
  }

  update(id: number, test: Test): Observable<Test> {
    return this.http.put<Test>(`${TESTS_URL}/${id}`, test);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${TESTS_URL}/${id}`);
  }

  getWikipediaDefinition(baseText: String): Observable<String> {
    return this.http.get(`${WIKIPEDIA_UTILS_URL}?wantedText=${baseText}`, {responseType: 'text'});
  }

  getTranslation(textToTranslate: String, translateToPolish: Boolean): Observable<String> {
    return this.http.get(`${TRANSLATE_UTILS_URL}?textToTranslate=${textToTranslate}&translateToPolish=${translateToPolish}`
      , {responseType: 'text'});
  }

  getSynonyms(baseWord: String): Observable<[String]> {
    return this.http.get<[String]>(`${SYNONYMS_UTILS_URL}?baseWord=${baseWord}`);
  }
}
