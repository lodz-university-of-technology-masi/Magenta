import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test, Tests} from '../../models/test';
import {
  REDACTOR_POSTFIX,
  EXPORT_POSTFIX,
  SYNONYMS_UTILS_URL,
  TESTS_URL,
  TRANSLATE_UTILS_URL,
  WIKIPEDIA_UTILS_URL,
  PDF_POSTFIX,
  CSV_POSTFIX
} from '../../shared/utils/backend-urls';
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

  getWikipediaDefinition(baseText: String, language: String): Observable<String> {
    return this.http.get(`${WIKIPEDIA_UTILS_URL}?wantedText=${baseText}&language=${language}`, {responseType: 'text'});
  }

  getTranslation(textToTranslate: String, translateToPolish: Boolean): Observable<String> {
    return this.http.get(`${TRANSLATE_UTILS_URL}?textToTranslate=${textToTranslate}&translateToPolish=${translateToPolish}`
      , {responseType: 'text'});
  }

  getSynonyms(baseWord: String, language: String): Observable<[String]> {
    return this.http.get<[String]>(`${SYNONYMS_UTILS_URL}?baseWord=${baseWord}&language=${language}`);
  }
  assign(testId: number, username: string): Observable<any> {
    return this.http.put(`${TESTS_URL}/${testId}/${REDACTOR_POSTFIX}?username=${username}`, null);
  }
  exportCSV(id: number): Observable<any> {
    return this.http.get(`${TESTS_URL}/${EXPORT_POSTFIX}/${id}/${CSV_POSTFIX}`,
      {responseType: 'blob'});
  }
  exportPDF(id: number):
    Observable<any> {
    return this.http.get(`${TESTS_URL}/${EXPORT_POSTFIX}/${id}/${PDF_POSTFIX}`,
      {responseType: 'blob'});
  }
  translateTest(id: number, translateToPolish: Boolean): Observable<Test> {
    return this.http.get<Test>(`${TESTS_URL}/translate/${id}?username=${this.sessionStorageService.getUser().username}&translateToPolish=${translateToPolish}`);
  }
}
