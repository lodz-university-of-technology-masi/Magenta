import { Component, OnInit } from '@angular/core';
import {ChangePasswordService} from '../../services/change-password.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmPasswordErrorMatcher} from '../../../shared/utils/confirm-password-error-state-matcher';
import {UserEditConfirmPassword} from './user-edit-confirm-password';
import {SessionStorageService} from '../../../shared/services/session-storage.service';
import {LoadingSpinnerComponent} from '../../../core/loading-spinner/loading-spinner.component';
import {MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH} from '../../../shared/utils/global-variables';

@Component({
  selector: 'app-user-password-change',
  templateUrl: './user-password-change.component.html',
  styleUrls: ['./user-password-change.component.css']
})
export class UserPasswordChangeComponent implements OnInit {

  passwordChangeForm: FormGroup;
  confirmPassword = new UserEditConfirmPassword();
  errorMatcher = new ConfirmPasswordErrorMatcher();
  minPasswordLength = MIN_PASSWORD_LENGTH;
  maxPasswordLength = MAX_PASSWORD_LENGTH;

  constructor(private formBuilder: FormBuilder,
              private passwordChangeService: ChangePasswordService,
              private sessionStorageService: SessionStorageService) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.passwordChangeForm = this.formBuilder.group({
      oldPassword: ['', [
        Validators.required,
        Validators.minLength(this.minPasswordLength),
        Validators.maxLength(this.maxPasswordLength)
      ]],
      newPassword: ['', [
        Validators.required,
        Validators.minLength(this.minPasswordLength),
        Validators.maxLength(this.maxPasswordLength)
      ]],
      confirmNewPassword: ['', [Validators.required]],
    }, {
      validator: this.confirmPassword.matchPassword
    } );
  }
  changePassword(): void {
    this.passwordChangeService.changePassword(
      this.sessionStorageService.getUser().username,
      this.passwordChangeForm.value
    ).subscribe();
  }
  getProcessingChange(): boolean {
    return LoadingSpinnerComponent.showLoadingIndicator;
  }
}
