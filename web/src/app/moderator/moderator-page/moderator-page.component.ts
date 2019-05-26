import { Component, OnInit } from '@angular/core';
import {UserService} from '../../redactor/services/user.service';
import {Router} from '@angular/router';
import {
  ADD_QUESTIONS,
  MODERATOR_REDACTORS_PAGE_URL,
  MODERATOR_TESTS_PAGE_URL,
  SOLUTIONS_PAGE_URL,
  TEST_PAGE_URL
} from '../../shared/utils/frontend-urls';
import {RedactorService} from '../services/redactor.service';
import {DistanceCalculatorService} from "../../metrics-processor/services/distance-calculator.service";

@Component({
  selector: 'app-moderator-page',
  templateUrl: './moderator-page.component.html',
  styleUrls: ['./moderator-page.component.css']
})
export class ModeratorPageComponent implements OnInit {

  moderatorTest = MODERATOR_TESTS_PAGE_URL;
  moderatorRedactors = MODERATOR_REDACTORS_PAGE_URL;
  constructor(private userService: UserService,
              private router: Router,
              public distanceCalculator: DistanceCalculatorService) {
  }

  ngOnInit(): void {
  }


  onCreateTestButtonClick(): void {
    this.router.navigate([TEST_PAGE_URL, ADD_QUESTIONS]);
  }

}
