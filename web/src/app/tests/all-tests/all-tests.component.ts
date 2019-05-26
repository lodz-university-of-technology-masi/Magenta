import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tests} from '../../models/test';
import {ActivatedRoute, Router} from '@angular/router';
import {TestService} from '../services/test.service';
import {ADD_QUESTIONS, TEST_PAGE_URL, TRANSLATE_TEST_PAGE_URL} from '../../shared/utils/frontend-urls';
import {SessionStorageService} from '../../shared/services/session-storage.service';
import * as FileSaver from 'file-saver';
import {Users} from '../../models/user/user';
import {AssignRedactorToTestComponent} from '../../dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component';
import {MatDialog} from '@angular/material';
import {DistanceCalculatorService} from "../../metrics-processor/services/distance-calculator.service";

@Component({
  selector: 'app-all-tests',
  templateUrl: './all-tests.component.html',
  styleUrls: ['./all-tests.component.css']
})
export class AllTestsComponent implements OnInit {
  tests: Tests;
  redactors: Users;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private testService: TestService,
              private sessionStorageService: SessionStorageService,
              private dialog: MatDialog,
              public distanceCalculator: DistanceCalculatorService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.tests = data['tests'];
    });
    this.redactors = this.route.snapshot.data['redactors'];
  }
  edit(id: number): void {
    this.router.navigate([TEST_PAGE_URL, id, ADD_QUESTIONS]);
  }
  exportCSV(id: number, name: string): void {
    this.testService.exportCSV(id).subscribe((file) => {
      FileSaver.saveAs(file, `${name}.csv`);
    });
  }
  exportPDF(id: number, name: string): void {
    this.testService.exportPDF(id).subscribe((file) => {
      FileSaver.saveAs(file, `${name}.pdf`);
    });
  }
  delete(id: number, index: number): void {
    this.testService.delete(id).subscribe(() => {
      this.tests.tests.splice(index, 1);
    });
  }
  translate(id: number): void {
    this.router.navigate([TRANSLATE_TEST_PAGE_URL, id, ADD_QUESTIONS]);
  }
  translateWholeTest(id: number): void {
    const test = this.tests.tests.find(it => it.id === id);
    const translateToPolish = test.language === 'en';
    this.testService.translateTest(id, translateToPolish).subscribe(result =>
      this.tests.tests.push(result)
    );
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
  getUsername(): string {
    return this.sessionStorageService.getUser().username;
  }
}
