import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SessionStorageService} from './shared/services/session-storage.service';
import {ErrorHandlingService} from './shared/services/error-handling.service';
import {LoadingSpinnerComponent} from './core/loading-spinner/loading-spinner.component';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class Interceptor  implements HttpInterceptor {

  constructor(private sessionStorageService: SessionStorageService,
              private errorHandlingService: ErrorHandlingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.errorHandlingService.clear();
    LoadingSpinnerComponent.setShowLoadingIndicator(true);
    if (this.sessionStorageService.isUserLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: this.sessionStorageService.getToken()
        }
      });
    }
    return next.handle(request).pipe(
      map(result => {
        this.handleValidResponse(result);
        return result;
      }),
      catchError((error) => {
        return of(this.handleErrorResponse(error));
      }) as any);
  }
  handleValidResponse(result: HttpEvent<any>): void {
    if (result instanceof HttpResponse) {
      LoadingSpinnerComponent.setShowLoadingIndicator(false);
      const response = result as HttpResponse<any>;
      if (response.headers.get('Authorization') !== null) {
        this.sessionStorageService.updateSession(response.headers.get('Authorization'));
      }
    }
  }
  handleErrorResponse(error: any): Observable<any> {
    LoadingSpinnerComponent.setShowLoadingIndicator(false);
    this.errorHandlingService.handle(error);
    return of(error);
  }
}
