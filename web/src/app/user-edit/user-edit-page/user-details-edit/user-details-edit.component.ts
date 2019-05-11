import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAccountService} from '../../services/user-account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorHandlingService} from '../../../shared/services/error-handling.service';
import {USER_EDIT_PAGE_URL} from '../../../shared/utils/frontend-urls';
import {HttpResponse} from '@angular/common/http';
import {SessionStorageService} from '../../../shared/services/session-storage.service';
import {LoggedUser} from '../../../models/user/logged-user';
import {MAX_USERNAME_LENGTH, MIN_USERNAME_LENGTH} from '../../../shared/utils/global-variables';
import {UserUpdateData} from '../../../models/user/user-update-data';

@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.component.html',
  styleUrls: ['./user-details-edit.component.css']
})
export class UserDetailsEditComponent implements OnInit {

  user: UserUpdateData;
  userDetailsForm: FormGroup;

  minUsernameLength = MIN_USERNAME_LENGTH;
  maxUsernameLength = MAX_USERNAME_LENGTH;

  constructor(private formBuilder: FormBuilder,
              private userAccountService: UserAccountService,
              private router: Router,
              private route: ActivatedRoute,
              private errorHandlingService: ErrorHandlingService,
              private sessionStorageService: SessionStorageService) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
    this.buildForm();
  }
  buildForm(): void {
    this.userDetailsForm = this.formBuilder.group({
      username: [this.user.username, [
        Validators.required,
        Validators.minLength(this.minUsernameLength),
        Validators.maxLength(this.maxUsernameLength)
      ]],
      email: [this.user.email, Validators.required],
      nameSurname: [this.user.nameSurname],
      language: [this.user.language, Validators.required]
    });
  }
  update(): void {
    this.userAccountService.updateAccount(
      this.user.username,
      this.userDetailsForm.value
    ).subscribe((result: HttpResponse <LoggedUser>) => {
      this.sessionStorageService.storeSession(
        result.body,
        result.headers.get('Authorization')
      );
      this.router.navigated = false;
      this.router.navigate([USER_EDIT_PAGE_URL]);
    });
  }
}
