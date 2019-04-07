import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';
import { UserDetailsEditComponent } from './user-edit-page/user-details-edit/user-details-edit.component';
import { UserPasswordChangeComponent } from './user-edit-page/user-password-change/user-password-change.component';
import { DeleteAccountComponent } from './user-edit-page/delete-account/delete-account.component';
import {DeleteUserAccountDialogComponent} from '../dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserEditRoutingModule} from './user-edit-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserEditRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [
    UserEditPageComponent,
    UserDetailsEditComponent,
    UserPasswordChangeComponent,
    DeleteAccountComponent
  ],
  entryComponents: [
    DeleteUserAccountDialogComponent
  ]
})
export class UserEditModule { }
