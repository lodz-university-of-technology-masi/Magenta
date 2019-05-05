import {Component, Input, OnInit} from '@angular/core';
import {Score, TestSolutionWithId} from '../../models/question';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../services/question.service';
import {REDACTOR_TESTS} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-check-solved-test',
  templateUrl: './check-solved-test.component.html',
  styleUrls: ['./check-solved-test.component.css']
})
export class CheckSolvedTestComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private questionService: QuestionService,
              private router: Router) { }

  solution: TestSolutionWithId;
  score = 0;
  ngOnInit() {
    this.solution = this.route.snapshot.data['solution'];
  }
  send(): void {
    const scoreModel = new Score();
    scoreModel.score = this.score;
    this.questionService.sendScore(
      this.solution.id,
      scoreModel
    ).subscribe(result => {
      this.router.navigate([REDACTOR_TESTS]);
    })
  }
}
