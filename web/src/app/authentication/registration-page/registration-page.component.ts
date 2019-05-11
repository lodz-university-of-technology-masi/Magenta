import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {ConfirmPasswordErrorMatcher} from '../../shared/utils/confirm-password-error-state-matcher';
import {LoadingSpinnerComponent} from '../../core/loading-spinner/loading-spinner.component';
import {RegistrationConfirmPassword} from './registration-confirm-password';
import {MAX_PASSWORD_LENGTH, MAX_USERNAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH} from '../../shared/utils/global-variables';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: [
    './registration-page.component.css',
    '../authentication.css'
  ]
})
export class RegistrationPageComponent implements OnInit {

  registerForm: FormGroup;
  confirmPassword = new RegistrationConfirmPassword();
  errorMatcher = new ConfirmPasswordErrorMatcher();

  minUsernameLength = MIN_USERNAME_LENGTH;
  maxUsernameLength = MAX_USERNAME_LENGTH;
  minPasswordLength = MIN_PASSWORD_LENGTH;
  maxPasswordLength = MAX_PASSWORD_LENGTH;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.registerForm = this.formBuilder.group({
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
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required]],
      nameSurname: [''],
      language: ['', Validators.required]
    }, {
      validator: this.confirmPassword.matchPassword
    } );
  }
  register(): void {
    this.authenticationService.register(this.registerForm.value);
  }
  getProcessingRegistration(): boolean {
    return LoadingSpinnerComponent.showLoadingIndicator;
  }

}
