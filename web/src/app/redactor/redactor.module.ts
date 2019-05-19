import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RedactorMainPageComponent} from './redactor-main-page/redactor-main-page.component';
import {RedactorRoutingModule} from './redactor-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {TestsModule} from '../tests/tests.module';
import {DialogsModule} from '../dialogs/dialogs.module';
import {AssignRedactorToTestComponent} from '../dialogs/warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component';
import {ImportDialogComponent} from '../dialogs/warning-dialog/import-dialog/import-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RedactorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    TestsModule,
    DialogsModule
  ],
  declarations: [RedactorMainPageComponent],
  exports : [RedactorMainPageComponent],
  entryComponents: [
    ImportDialogComponent,
    AssignRedactorToTestComponent
  ]
})
export class RedactorModule {
}
