import { Component, OnInit } from '@angular/core';
import {Solutions} from '../../models/question';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../services/question.service';
import {CHECK_TEST} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-redactor-tests',
  templateUrl: './redactor-tests.component.html',
  styleUrls: ['./redactor-tests.component.css']
})
export class RedactorTestsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  solutions: Solutions;
  checkPage = CHECK_TEST;
  ngOnInit() {
    this.solutions = this.route.snapshot.data['solutions'];
  }

}
