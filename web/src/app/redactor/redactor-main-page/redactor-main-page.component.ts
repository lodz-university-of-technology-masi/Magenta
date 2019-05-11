import {Component, OnInit} from '@angular/core';
import {Test} from '../../models/test';
import {User} from '../../models/user/user';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {ADD_QUESTIONS, SOLUTIONS_PAGE_URL, TEST_PAGE_URL} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-editor-main-page',
  templateUrl: './redactor-main-page.component.html',
  styleUrls: ['./redactor-main-page.component.css']
})
export class RedactorMainPageComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(result => result.users.forEach(user =>
      this.users.push(user)
    ));
  }

  onCheckTestButtonClick(): void {
    this.router.navigate([SOLUTIONS_PAGE_URL]);
  }

  onCreateTestButtonClick(): void {
    this.router.navigate([TEST_PAGE_URL, ADD_QUESTIONS]);
  }
}
