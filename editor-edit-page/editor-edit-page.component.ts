import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../user-edit/services/user-account.service';
import {DeleteUserAccountDialogComponent} from '../dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component';
import {MAIN_PAGE_URL} from '../shared/utils/frontend-urls';
import {MatDialog} from '@angular/material';
import {EditorAccountService} from './services/editor-account.service';

@Component({
  selector: 'app-editor-edit-page',
  templateUrl: './editor-edit-page.component.html',
  styleUrls: ['./editor-edit-page.component.css']
})
export class EditorEditPageComponent implements OnInit {

  constructor() { private editorAccountService: EditorAccountService,
                  private dialog: MatDialog}

  ngOnInit() {
  }

  delete(): void {

  }

  add(): void {

  }

  modify(): void {

  }
}
