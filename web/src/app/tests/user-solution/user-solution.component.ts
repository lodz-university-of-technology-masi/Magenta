import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SolutionsService} from '../services/solutions.service';
import {Score, TestSolutionWithId} from '../../models/question';
import {REDACTOR_TESTS} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-user-solution',
  templateUrl: './user-solution.component.html',
  styleUrls: ['./user-solution.component.css']
})
export class UserSolutionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  solution: TestSolutionWithId;
  ngOnInit() {
    this.solution = this.route.snapshot.data['solution'];
  }
}
