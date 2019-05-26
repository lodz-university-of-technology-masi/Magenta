import { Component, OnInit } from '@angular/core';
import {UserUpdateData} from '../../models/user/user-update-data';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAX_USERNAME_LENGTH, MIN_USERNAME_LENGTH} from '../../shared/utils/global-variables';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {LoggedUser} from '../../models/user/logged-user';
import {MODERATOR_REDACTORS_PAGE_URL} from '../../shared/utils/frontend-urls';
import {RedactorService} from '../services/redactor.service';

@Component({
  selector: 'app-modify-redactor',
  templateUrl: './modify-redactor.component.html',
  styleUrls: ['./modify-redactor.component.css']
})
export class ModifyRedactorComponent implements OnInit {

  redactor: UserUpdateData;
  redactorDetailsForm: FormGroup;

  minUsernameLength = MIN_USERNAME_LENGTH;
  maxUsernameLength = MAX_USERNAME_LENGTH;

  constructor(private redactorService: RedactorService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.redactor = this.route.snapshot.data['redactor'];
    this.buildForm();
  }
  buildForm(): void {
    this.redactorDetailsForm = this.formBuilder.group({
      username: [this.redactor.username, [
        Validators.required,
        Validators.minLength(this.minUsernameLength),
        Validators.maxLength(this.maxUsernameLength)
      ]],
      email: [this.redactor.email, Validators.required],
      nameSurname: [this.redactor.nameSurname],
    });
  }
  update(): void {
    this.redactorService.modify(
      this.redactor.username,
      this.redactorDetailsForm.value
    ).subscribe((result: HttpResponse <LoggedUser>) => {
      this.router.navigate([MODERATOR_REDACTORS_PAGE_URL]);
    });
  }

}
