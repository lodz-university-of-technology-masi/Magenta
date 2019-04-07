import { Component, OnInit } from '@angular/core';
import {UserAccountService} from '../../services/user-account.service';
import {SessionStorageService} from '../../../shared/services/session-storage.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {MAIN_PAGE_URL} from '../../../shared/utils/frontend-urls';
import {
  DeleteUserAccountDialogComponent
} from '../../../dialogs/yes-no-dialog/delete-user-account-dialog/delete-user-account-dialog.component';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor(private userAccountService: UserAccountService,
              private sessionStorageService: SessionStorageService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete(): void {
    const dialogRef = this.dialog.open(DeleteUserAccountDialogComponent, {
      height: '250px',
      width: '350px',
    });
    dialogRef.afterClosed().subscribe( res => {
      if (res === true) {
        this.userAccountService.deleteAccount(
          this.sessionStorageService.getUser().username
        ).subscribe(result => {
          this.sessionStorageService.logout();
          this.router.navigate([MAIN_PAGE_URL]);
        });
      }
    });
  }
}
