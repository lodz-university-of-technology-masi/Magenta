import { Component, OnInit } from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {LoggedUser} from '../models/user/logged-user';
import {MAIN_PAGE_URL} from '../shared/utils/frontend-urls';
import {PositionService} from './services/position.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-position-edit-page',
  templateUrl: './position-edit-page.component.html',
  styleUrls: ['./position-edit-page.component.css']
})
export class PositionEditPageComponent implements OnInit {

  constructor() { private positionService: PositionService,
                  private dialog: MatDialog}

  ngOnInit() {
  }

  activate(): void {

  }

  deactivate(): void {

  }

}
