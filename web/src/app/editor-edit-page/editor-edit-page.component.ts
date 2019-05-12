import { Component, OnInit } from '@angular/core';
import {CHECK_TEST, MAIN_PAGE_URL, USER_EDIT_PAGE_URL} from '../shared/utils/frontend-urls';
import {MatDialog} from '@angular/material';
import {EditorAccountService} from './services/editor-account.service';
import {HttpResponse} from '@angular/common/http';
import {LoggedUser} from '../models/user/logged-user';
import {User} from '../models/user/user';
import {FormGroup} from '@angular/forms';
import {MAX_PASSWORD_LENGTH, MAX_USERNAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH} from '../shared/utils/global-variables';
import {Solutions} from '../models/question';

@Component({
  selector: 'app-editor-edit-page',
  templateUrl: './editor-edit-page.component.html',
  styleUrls: ['./editor-edit-page.component.css']
})
export class EditorEditPageComponent implements OnInit {

  user: User;
  checkPage = CHECK_TEST;
  userDetailsForm: FormGroup;
  registerForm: FormGroup;

  minUsernameLength = MIN_USERNAME_LENGTH;
  maxUsernameLength = MAX_USERNAME_LENGTH;
  minPasswordLength = MIN_PASSWORD_LENGTH;
  maxPasswordLength = MAX_PASSWORD_LENGTH;

  constructor(private editorAccountService: EditorAccountService,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
  }

  delete(): void {
    //prośba o implementację, tak jak pisałem w komentarzu poprzedniego PR
    this.editorAccountService.deleteAccount();
  }

  add(): void {
    //prośba o implementację, tak jak pisałem w komentarzu poprzedniego PR
    this.editorAccountService.addAccount();
  }

  modify(): void {
    //prośba o poprawną implementację
    this.editorAccountService.modifyAccount(
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
