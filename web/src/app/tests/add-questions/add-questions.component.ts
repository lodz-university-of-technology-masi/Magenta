import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Question, Questions} from '../../models/question';
import {OPEN_QUESTION, VARIANT_QUESTION} from '../../shared/utils/global-variables';
import {QuestionService} from '../services/question.service';
import {REDACTOR_PAGE_URL} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private questionService: QuestionService) {
  }

  questions: Questions;

  ngOnInit(): void {
    this.questions = this.route.snapshot.data['test'];
  }

  add(): void {
    const question = new Question();
    question.min = 1;
    question.max = 5;
    question.variants = [];
    question.question = '';
    question.type = OPEN_QUESTION;
    this.questions.questions.push(question);
  }

  delete(id: number): void {
    this.questions.questions.splice(id, 1);
  }

  send(): void {
    this.questionService.save(
      +this.route.snapshot.paramMap.get('test'),
      this.questions
    ).subscribe(
      result => {
        this.router.navigate([REDACTOR_PAGE_URL]);
      }
    );
  }

  areQuestionsValid(): boolean {
    for (let i = 0; i < this.questions.questions.length; i++) {
      const element = this.questions.questions[i];
      if (element.question.length === 0) {
        return false;
      }
      if (element.type === VARIANT_QUESTION && element.variants.length < 2) {
        return false;
      }
      for (let j = 0; j < element.variants.length; j++) {
        const variantElement = element.variants[j];
        if (variantElement.text.length === 0) {
          return false;
        }
      }
    }
    return true;
  }
}
