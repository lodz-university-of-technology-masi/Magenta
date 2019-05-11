import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {Question, Questions} from '../../models/question';
import {OPEN_QUESTION, VARIANT_QUESTION} from '../../shared/utils/global-variables';
import {QuestionService} from '../services/question.service';
import {MAIN_PAGE_URL, MODERATOR_PAGE_URL, REDACTOR_PAGE_URL} from '../../shared/utils/frontend-urls';
import {Observable} from 'rxjs';
import {Test} from '../../models/test';
import {TestService} from '../services/test.service';
import {SessionStorageService} from '../../shared/services/session-storage.service';

@Component({
  selector: 'app-test-editor',
  templateUrl: './test-editor.component.html',
  styleUrls: ['./test-editor.component.css']
})
export class TestEditorComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private questionService: QuestionService,
              private testService: TestService,
              private sessionStorageService: SessionStorageService) {
  }

  questions: Questions;
  test: Test;
  url: UrlSegment[];

  ngOnInit(): void {
    this.questions = this.route.snapshot.data['questions'];
    this.test = this.route.snapshot.data['test'];
    if (this.questions === null || this.questions === undefined) {
      this.questions = new Questions();
      this.questions.questions = [];
    }
    if (this.test === null || this.test === undefined) {
      this.test = new Test();
      this.test.language = '';
      this.test.name = '';
    }
    this.route.url.subscribe(url => {
      this.url = url;
    });

  }
  checkUrl(path: string): boolean {
    for (let i = 0; i < this.url.length; i++) {
      const item = this.url[i];
      if (item.path === path) {
        return true;
      }
    }
    return false;
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
  sendTest(): Observable<Test> {
    if (this.test.id === 0) {
      return this.testService.create(this.test);
    } else {
      return this.testService.update(this.test.id, this.test);
    }
  }
  send(): void {
    this.sendTest().subscribe(testResult => {
      this.questionService.save(
        +this.route.snapshot.paramMap.get('test'),
        this.questions
      ).subscribe(
        questionResult => {
          this.navigate();
        }
      );
    });
  }

  navigate(): void {
    if (this.sessionStorageService.isRedactor()) {
      this.router.navigate([REDACTOR_PAGE_URL]);
    } else if (this.sessionStorageService.isModerator()) {
      this.router.navigate([MODERATOR_PAGE_URL]);
    } else {
      this.router.navigate([MAIN_PAGE_URL]);
    }
  }

  isTestValid(): boolean {
    if (this.test.name.length === 0) {
      return false;
    }
    if (this.test.language.length === 0) {
      return false;
    }
    return true;
  }
  areQuestionsValid(): boolean {
    if (this.questions.questions.length === 0) {
      return false;
    }
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
