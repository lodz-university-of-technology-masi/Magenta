import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import { DeleteUserAccountDialogComponent } from './yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component';
import { AssignRedactorToTestComponent } from './warning-dialog/assign-redactor-to-test/assign-redactor-to-test.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  declarations: [
    WarningDialogComponent,
    YesNoDialogComponent,
    DeleteUserAccountDialogComponent,
    AssignRedactorToTestComponent
  ]
})
export class DialogsModule { }
