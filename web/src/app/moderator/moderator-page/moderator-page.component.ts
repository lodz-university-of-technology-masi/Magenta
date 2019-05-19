import { Component, OnInit } from '@angular/core';
import {UserService} from '../../redactor/services/user.service';
import {Router} from '@angular/router';
import {ADD_QUESTIONS, SOLUTIONS_PAGE_URL, TEST_PAGE_URL} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-moderator-page',
  templateUrl: './moderator-page.component.html',
  styleUrls: ['./moderator-page.component.css']
})
export class ModeratorPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
