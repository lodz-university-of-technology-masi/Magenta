import {Component, OnInit} from '@angular/core';
import {Solutions} from '../../models/question';
import {ActivatedRoute} from '@angular/router';
import {CHECK_TEST} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-redactor-tests',
  templateUrl: './redactor-tests.component.html',
  styleUrls: ['./redactor-tests.component.css']
})
export class RedactorTestsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  solutions: Solutions;
  checkPage = CHECK_TEST;

  ngOnInit(): void {
    this.solutions = this.route.snapshot.data['solutions'];
  }

}
