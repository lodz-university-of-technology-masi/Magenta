import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Test, Tests} from '../../models/test';
import {ActivatedRoute, Router} from '@angular/router';
import {TestService} from '../services/test.service';
import {ADD_QUESTIONS, TEST_PAGE_URL, TRANSLATE_TEST_PAGE_URL} from '../../shared/utils/frontend-urls';
import {SessionStorageService} from '../../shared/services/session-storage.service';
import {Users} from '../../models/user/user';
import {AssignRedactorToTestComponent} from '../../dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-all-tests',
  templateUrl: './all-tests.component.html',
  styleUrls: ['./all-tests.component.css']
})
export class AllTestsComponent implements OnInit {

  @Input()
  redactor: boolean;

  tests: Tests;
  redactors: Users;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private testService: TestService,
              private sessionStorageService: SessionStorageService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tests = this.route.snapshot.data['tests'];
    this.redactors = this.route.snapshot.data['redactors'];
  }
  edit(id: number): void {
    this.router.navigate([TEST_PAGE_URL, id, ADD_QUESTIONS]);
  }
  delete(id: number): void {
    this.testService.delete(id).subscribe();
    this.tests.tests.splice(id, 1);
  }
  translate(id: number): void {
    this.router.navigate([TRANSLATE_TEST_PAGE_URL, id, ADD_QUESTIONS]);
  }
  isRedactor(): boolean {
    return this.sessionStorageService.isRedactor();
  }
  assign(testId: number, username: string): void {
    this.testService.assign(testId, username).subscribe(() => {
      this.dialog.open(AssignRedactorToTestComponent, {
        height: '200px',
        width: '300px',
      });
    });
  }
  getUsername() {
    return this.sessionStorageService.getUser().username;
  }
}
