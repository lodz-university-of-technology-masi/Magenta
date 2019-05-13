import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {Question, Questions} from '../../models/question';
import {OPEN_QUESTION, VARIANT_QUESTION} from '../../shared/utils/global-variables';
import {QuestionService} from '../services/question.service';
import {MAIN_PAGE_URL, MODERATOR_PAGE_URL, REDACTOR_PAGE_URL, TRANSLATE_TEST_PAGE_URL} from '../../shared/utils/frontend-urls';
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
  selectedText: String = '';
  textValue: String = '';

  ngOnInit(): void {
    this.questions = this.route.snapshot.data['questions'];
    this.test = this.route.snapshot.data['test'];
    if (this.questions === null || this.questions === undefined) {
      this.questions = new Questions();
      this.questions.questions = [];
    }
    if (this.test === null || this.test === undefined) {
      this.test = new Test();
      this.test.id = 0;
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
    console.log(this.test.id);
    if (this.test.id === 0 || this.checkUrl(TRANSLATE_TEST_PAGE_URL)) {
      console.log('create');
      return this.testService.create(this.test);
    } else {
      console.log('update');
      return this.testService.update(this.test.id, this.test);
    }
  }

  send(): void {
    this.sendTest().subscribe(testResult => {
      if (this.isRedactor()) {
        this.questionService.save(
          testResult.id,
          this.questions
        ).subscribe(
          questionResult => {
            this.navigate();
          }
        );
      } else {
        this.navigate();
      }
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
    if (!this.isRedactor()) {
      return true;
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

  isRedactor(): boolean {
    return this.sessionStorageService.isRedactor();
  }

  getSelectedText(): void {
    this.selectedText = window.getSelection().toString();
  }

  disableUtilsButton(): Boolean {
    return this.selectedText === '';
  }

  disableSynonymsButton(): Boolean {
    return this.test.language === 'pl' || this.disableUtilsButton();
  }

  onWikipediaButtonClick(): void {
    this.testService.getWikipediaDefinition(this.selectedText).subscribe(result =>
      this.textValue = result.valueOf()
    );
  }

  onTranslateButtonClick(): void {
    const translateToPolish: Boolean = this.test.language === 'en';
    this.testService.getTranslation(this.selectedText, translateToPolish).subscribe(result =>
      this.textValue = result.valueOf()
    );
  }

  onSynonymsButtonClick(): void {
    this.testService.getSynonyms(this.selectedText).subscribe(result =>
      result.forEach(synonym => {
        this.textValue = this.textValue.concat(`${synonym.valueOf()}, `);
      })
    );
  }
}
