import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {LOGIN_PAGE_URL, NOT_FOUND_PAGE_URL} from '../utils/frontend-urls';
import {SessionStorageService} from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  errorMessage: string;
  errorCode: number;
  error: boolean;
  constructor(private router: Router,
              private sessionStorageService: SessionStorageService) { }

  clear(): void {
    this.errorCode = 0;
    this.errorMessage = null;
    this.error = false;
  }
  handle(error: HttpErrorResponse): void {
    if (error.error !== undefined && error.error !== null) {
      this.errorCode = error.error.code;
      this.errorMessage = error.error.message;
    }
    this.error = true;
    if (this.errorCode === 404 || this.errorCode === 504) {
      this.handle404and504();
    } else if (this.errorCode === 401) {
      this.handle401();
    } else {
      window.scrollTo(0, 0);
    }
  }
  handle401(): void {
    this.sessionStorageService.clearSession();
    this.router.navigate([LOGIN_PAGE_URL]);
  }
  handle404and504(): void {
    this.router.navigate([NOT_FOUND_PAGE_URL]);
  }
  hasError(): boolean {
    return this.error;
  }
  getErrorMessage(): string {
    return this.errorMessage;
  }
  getErrorCode(): number {
    return this.errorCode;
  }
}
