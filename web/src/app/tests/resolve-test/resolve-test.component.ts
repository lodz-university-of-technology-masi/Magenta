import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../services/question.service';
import {Questions, TestAnswer, TestSolution} from '../../models/question';
import {NUMERIC_QUESTION, OPEN_QUESTION, SCALA_QUESTION, VARIANT_QUESTION} from '../../shared/utils/global-variables';
import {USER_PAGE_URL} from '../../shared/utils/frontend-urls';
import {SolutionsService} from '../services/solutions.service';

@Component({
  selector: 'app-resolve-test',
  templateUrl: './resolve-test.component.html',
  styleUrls: ['./resolve-test.component.css']
})
export class ResolveTestComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private solutionsService: SolutionsService) { }
  solution: TestSolution;
  test: Questions;
  variant = VARIANT_QUESTION;
  scala = SCALA_QUESTION;
  numeric = NUMERIC_QUESTION;
  open = OPEN_QUESTION;

  ngOnInit() {
    this.test = this.route.snapshot.data['test'];
    this.createEmptySolution();
  }

  createEmptySolution(): void {
    this.solution = new TestSolution();
    this.solution.testId = +this.route.snapshot.paramMap.get('test');
    this.solution.answers = [];
    for (let i = 0; i < this.test.questions.length; i++) {
      const answer = new TestAnswer();
      answer.answer = '';
      answer.question = this.test.questions[i].question;
      this.solution.answers.push(answer);
    }
  }
  setAnswer(id: number, answer: string): void {
    this.solution.answers[id].answer = answer;
  }
  getScalaVariants(min: number, max: number): number[] {
    const result = [];

    for (let i = min; i <= max; i++) {
      result.push(i);
    }

    return result;
  }
  send(): void {
    this.solutionsService.sendSolution(this.solution).subscribe(
      result => {
        this.router.navigate([USER_PAGE_URL]);
      }
    );

  }
}
