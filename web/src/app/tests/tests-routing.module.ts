import {Route, RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {ADD_QUESTIONS, REDACTOR_TEST_PAGE_URL} from '../shared/utils/frontend-urls';
import {RedactorGuard} from '../guards/redactor-quard';
import {AddQuestionsComponent} from './add-questions/add-questions.component';
import {QuestionResolveService} from './services/question-resolve.service';

const MAIN_PAGE_ROUTES: Route[] = [
  {
    path: `${REDACTOR_TEST_PAGE_URL}/:test/${ADD_QUESTIONS}`,
    component: <any>AddQuestionsComponent,
    resolve: {
      test: QuestionResolveService
    },
    canActivate: [
      RedactorGuard
    ],
    runGuardsAndResolvers: 'always'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(MAIN_PAGE_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})

export class TestsRoutingModule {}
