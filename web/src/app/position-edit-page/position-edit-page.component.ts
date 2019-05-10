import { Component, OnInit } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {LoggedUser} from '../models/user/logged-user';
import {MAIN_PAGE_URL} from '../shared/utils/frontend-urls';
import {PositionService} from './services/position.service';

@Component({
  selector: 'app-position-edit-page',
  templateUrl: './position-edit-page.component.html',
  styleUrls: ['./position-edit-page.component.css']
})
export class PositionEditPageComponent implements OnInit {

  constructor() {private positionService: PositionService,}

  ngOnInit() {
  }

  /*deactivate(): void {
    this.positionService.deactivatePosition(
    ).subscribe() => {
      this.sessionStorageService.storeSession(
      );
      this.router.navigated = false;
      this.router.navigate([MAIN_PAGE_URL]);
    });
  }

  activate(): void {
  this.positionService.activatePosition(
  ).subscribe() => {
  this.sessionStorageService.storeSession(
  );
  this.router.navigated = false;
  this.router.navigate([MAIN_PAGE_URL]);
});
}*/

}
