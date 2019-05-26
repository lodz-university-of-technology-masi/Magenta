import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {METRICS_URL, SCREEN_URL} from "../../shared/utils/backend-urls";
import {MetricsModel} from "../../models/metrics";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MetricsProcessorService {

  constructor(private http: HttpClient) {
  }

  persist(model: MetricsModel): Observable<any> {
    return this.http.post(METRICS_URL, model);
  }

  saveScreen(body: Object): Observable<any> {
    return this.http.post(SCREEN_URL, body);
  }
}
