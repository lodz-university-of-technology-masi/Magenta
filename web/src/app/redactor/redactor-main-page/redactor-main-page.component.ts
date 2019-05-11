import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Test} from '../../models/test';
import {User} from '../../models/user/user';
import {UserService} from '../services/user.service';
import {TestService} from '../services/test.service';
import {map} from 'rxjs/operators';
import {Log} from '@angular/core/testing/src/logger';

@Component({
  selector: 'app-editor-main-page',
  templateUrl: './redactor-main-page.component.html',
  styleUrls: ['./redactor-main-page.component.css']
})
export class RedactorMainPageComponent implements OnInit {

  tests: Test[] = [];
  users: User[] = [];
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
    this.testService.getTests().subscribe(result => result.tests.forEach(test =>
      this.tests.push(test)
    ));

    this.userService.getUsers().subscribe(result => result.users.forEach(user =>
      this.users.push(user)
    ));
  }


  onCheckTestButtonClick(): void {
  }

  onEditTestButtonClick(): void {
  }

  onCreateTestButtonClick(): void {
    print();
  }

  onDeleteTestButtonClick(): void {
    this.testService.deleteTest(this.selectedTest.id);
  }
}
