import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordService} from '../../services/password.service';
import {LoadingSpinnerComponent} from '../../../core/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: [
    '../../authentication.css',
    './reset-password.component.css'
  ]
})
export class ResetPasswordComponent implements OnInit {
  wasSent = false;
  passwordResetForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private passwordService: PasswordService) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.passwordResetForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    });
  }

  resetPassword(): void {
    this.passwordService.resetPassword(
      this.passwordResetForm.value
    ).subscribe(() => {
      this.wasSent = true;
    });
  }

  getProcessingReset(): boolean {
    return LoadingSpinnerComponent.showLoadingIndicator;
  }
}
