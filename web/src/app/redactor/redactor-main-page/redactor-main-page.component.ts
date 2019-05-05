import {Component, OnInit} from '@angular/core';
import {Test} from '../../models/test';
import {User} from '../../models/user/user';
import {UserRole} from '../../models/user/user-role';
import {AuthenticationService} from '../../authentication/services/authentication.service';
import {UserService} from '../services/user.service';
import {HttpResponse} from '@angular/common/http';
import {LoggedUser} from '../../models/user/logged-user';
import {RegisterUserDetails} from '../../models/user/register-user-details';
import {REGISTER_URL} from '../../shared/utils/backend-urls';
import {TestService} from '../services/test.service';

@Component({
  selector: 'app-editor-main-page',
  templateUrl: './redactor-main-page.component.html',
  styleUrls: ['./redactor-main-page.component.css']
})
export class RedactorMainPageComponent implements OnInit {

  tests: Test[];
  users: User[];
  selectedTest: Test;
  selectedUser: User;

  constructor(private userService: UserService, private testService: TestService) {
  }


  checkIfSelectedTestIsNull(): Boolean {
    return this.selectedTest == null;
  }

  checkIfSelectedTestAndUserIsNull(): Boolean {
    return this.selectedTest == null || this.selectedUser == null;
  }

  ngOnInit(): void {
    this.userService.getUsers().toPromise()
      .then(result => {
        this.users = result;
      });
    this.testService.getTests().toPromise()
      .then(result => {
        this.tests = result;
      });
  }

  onCheckTestButtonClick(): void {
    this.testService.getTests(); // TODO go to checking module
  }

  onEditTestButtonClick(): void {
    this.testService.getTests(); // TODO got to editing module
  }

  onCreateTestButtonClick(): void {
    // TODO got to creating test module
  }

  onDeleteTestButtonClick(): void {
    this.testService.deleteTest(this.selectedTest.id);
  }
}
