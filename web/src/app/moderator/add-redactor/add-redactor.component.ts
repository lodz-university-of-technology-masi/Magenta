import { Component, OnInit } from '@angular/core';
import {RedactorService} from '../services/redactor.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationConfirmPassword} from '../../authentication/registration-page/registration-confirm-password';
import {ConfirmPasswordErrorMatcher} from '../../shared/utils/confirm-password-error-state-matcher';
import {MAX_PASSWORD_LENGTH, MAX_USERNAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH} from '../../shared/utils/global-variables';
import {LoadingSpinnerComponent} from '../../core/loading-spinner/loading-spinner.component';
import {Router} from '@angular/router';
import {MODERATOR_REDACTORS_PAGE_URL} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-add-redactor',
  templateUrl: './add-redactor.component.html',
  styleUrls: ['./add-redactor.component.css']
})
export class AddRedactorComponent implements OnInit {

  constructor(private redactorService: RedactorService,
              private formBuilder: FormBuilder,
              private router: Router) { }
              


  ngOnInit(): void {

  }

}
