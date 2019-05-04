import { Injectable } from '@angular/core';
import {LoggedUser} from '../../models/user/logged-user';
import {ROLE_ADMIN, ROLE_REDACTOR} from '../utils/global-variables';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  storeSession(user: LoggedUser, token: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify(user));
  }
  updateSession(token: string): void {
    localStorage.setItem('token', token);
  }
  clearSession(): void {
    localStorage.clear();
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }
  getUser(): LoggedUser {
    return JSON.parse(localStorage.getItem('userData'));
  }
  getToken(): string {
    return localStorage.getItem('token');
  }
  isUserLoggedIn(): boolean {
    return this.getUser() !== null;
  }
  hasRole(role: string): boolean {
    if (!this.isUserLoggedIn()) {
      return false;
    }
    for (let i = 0; i < this.getUser().roles.length; i++) {
      if (this.getUser().roles[i].name === role) {
        return true;
      }
    }
    return false;
  }
  isAdmin(): boolean {
    return this.hasRole(ROLE_ADMIN);
  }
  isRedactor(): boolean {
    return this.hasRole(ROLE_REDACTOR);
  }
  checkUsername(username: string): boolean {
    return this.getUser().username === username;
  }
}
