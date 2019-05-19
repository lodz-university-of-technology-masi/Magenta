import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RedactorMainPageComponent} from './redactor-main-page/redactor-main-page.component';
import {RedactorRoutingModule} from './redactor-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {TestsModule} from '../tests/tests.module';
import {ImportDialogComponent} from '../dialogs/warning-dialog/import-dialog/import-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RedactorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    TestsModule
  ],
  declarations: [RedactorMainPageComponent],
  exports : [RedactorMainPageComponent],
  entryComponents: [
    ImportDialogComponent
  ]
})
export class RedactorModule {
}
