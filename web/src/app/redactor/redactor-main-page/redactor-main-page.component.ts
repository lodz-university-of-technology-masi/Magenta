import {Component, OnInit, ViewChild} from '@angular/core';
import {Test} from '../../models/test';
import {User} from '../../models/user/user';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {ADD_QUESTIONS, MAIN_PAGE_URL, REDACTOR_PAGE_URL, SOLUTIONS_PAGE_URL, TEST_PAGE_URL} from '../../shared/utils/frontend-urls';
import {MatDialog} from '@angular/material';
import {TestService} from '../services/test.service';
import {ImportDialogComponent} from '../../dialogs/warning-dialog/import-dialog/import-dialog.component';

@Component({
  selector: 'app-editor-main-page',
  templateUrl: './redactor-main-page.component.html',
  styleUrls: ['./redactor-main-page.component.css']
})
export class RedactorMainPageComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;
  constructor(private userService: UserService,
              private router: Router,
              private dialog: MatDialog,
              private testService: TestService) {
  }

  ngOnInit(): void {
  }

  onCheckTestButtonClick(): void {
    this.router.navigate([SOLUTIONS_PAGE_URL]);
  }

  onCreateTestButtonClick(): void {
    this.router.navigate([TEST_PAGE_URL, ADD_QUESTIONS]);
  }
  onImportTestButtonClick(event): void {
    if (event.target.files.length === 1) {
      this.testService.import(event.target.files[0]).subscribe(importReport => {
        this.dialog.open(ImportDialogComponent, {
          height: '400px',
          width: '600px',
          data: {
            importReport: importReport
          }
        }).afterClosed().subscribe(() => {
          this.router.navigated = false;
          this.router.navigate([REDACTOR_PAGE_URL]);
        });
      });
      event.target.value = '';
    }
  }

  showFileDialog(): void {
    this.fileInput.nativeElement.click();
  }
}
