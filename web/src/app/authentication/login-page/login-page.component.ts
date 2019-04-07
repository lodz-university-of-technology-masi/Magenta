import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthenticationService} from '../services/authentication.service';
import {LoadingSpinnerComponent} from '../../core/loading-spinner/loading-spinner.component';
import {MAX_PASSWORD_LENGTH, MAX_USERNAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH} from '../../shared/utils/global-variables';
import {RESET_PASSWORD_PAGE_URL} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [
    './login-page.component.css',
    '../authentication.css'
  ]
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  minUsernameLength = MIN_USERNAME_LENGTH;
  maxUsernameLength = MAX_USERNAME_LENGTH;
  minPasswordLength = MIN_PASSWORD_LENGTH;
  maxPasswordLength = MAX_PASSWORD_LENGTH;

  resetPasswordPage = RESET_PASSWORD_PAGE_URL;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(this.minUsernameLength),
        Validators.maxLength(this.maxUsernameLength)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(this.minPasswordLength),
        Validators.maxLength(this.maxPasswordLength)
      ]],
    });
  }
  login(): void {
    this.authenticationService.login(this.loginForm.value);
  }
  getProcessingLogin(): boolean {
    return LoadingSpinnerComponent.showLoadingIndicator;
  }
}
