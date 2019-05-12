import {Component, Input, OnInit} from '@angular/core';
import {Score, TestSolutionWithId} from '../../models/question';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../services/question.service';
import {SOLUTIONS_PAGE_URL} from '../../shared/utils/frontend-urls';
import {SolutionsService} from '../services/solutions.service';

@Component({
  selector: 'app-check-solved-test',
  templateUrl: './check-solved-test.component.html',
  styleUrls: ['./check-solved-test.component.css']
})
export class CheckSolvedTestComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private solutionsService: SolutionsService,
              private router: Router) {
  }

  solution: TestSolutionWithId;
  score = 0;

  ngOnInit(): void {
    this.solution = this.route.snapshot.data['solution'];
  }

  send(): void {
    const scoreModel = new Score();
    scoreModel.score = this.score;
    this.solutionsService.sendScore(
      this.solution.id,
      scoreModel
    ).subscribe(result => {
      this.router.navigate([SOLUTIONS_PAGE_URL]);
    });
  }
}
