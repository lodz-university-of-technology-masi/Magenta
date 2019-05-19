import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ImportTestReportWrapper} from '../../../models/test';

@Component({
  selector: 'app-import-dialog',
  templateUrl: './import-dialog.component.html',
  styleUrls: ['./import-dialog.component.css']
})
export class ImportDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public importReportWrapper: ImportTestReportWrapper) { }

  ngOnInit() {
  }

}
