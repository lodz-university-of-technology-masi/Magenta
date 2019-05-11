import { Component, OnInit } from '@angular/core';
import {EditorAccountService} from '../../editor-edit-page/services/editor-account.service';
import {MatDialog} from '@angular/material';
import {TestEditService} from './services/test-edit.service';

@Component({
  selector: 'app-tests-edit-page',
  templateUrl: './tests-edit-page.component.html',
  styleUrls: ['./tests-edit-page.component.css']
})
export class TestsEditPageComponent implements OnInit {

  constructor() { private testEditService: TestEditService,
                  private dialog: MatDialog }

  ngOnInit() {
  }

  assign(): void {

  }

  delete(): void {

  }
}
