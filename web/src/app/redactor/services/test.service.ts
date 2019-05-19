import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IMPORT_POSTFIX, TESTS_URL} from '../../shared/utils/backend-urls';
import {Observable} from 'rxjs/Observable';
import {ImportTestReport, Test, Tests} from '../../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) {
  }
  import(file: File): Observable<ImportTestReport> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post<ImportTestReport>(`${TESTS_URL}/${IMPORT_POSTFIX}`, formData);
  }
}
