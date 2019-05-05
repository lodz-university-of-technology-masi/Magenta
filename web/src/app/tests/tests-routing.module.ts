import {Route, RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {ADD_QUESTIONS, CHECK_TEST, REDACTOR_TEST_PAGE_URL, REDACTOR_TESTS, RESOLVE_TEST} from '../shared/utils/frontend-urls';
import {RedactorGuard} from '../guards/redactor-quard';
import {AddQuestionsComponent} from './add-questions/add-questions.component';
import {QuestionResolveService} from './services/question-resolve.service';
import {ResolveTestComponent} from './resolve-test/resolve-test.component';
import {UserGuard} from '../guards/user-guard';
import {SolutionsForRedactorResolveService} from './services/solutions-for-redactor-resolve.service';
import {RedactorTestsComponent} from './redactor-tests/redactor-tests.component';
import {CheckSolvedTestComponent} from './check-solved-test/check-solved-test.component';
import {SolutionResolveService} from './services/solution-resolve.service';

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
  {
    path: `${RESOLVE_TEST}/:test`,
    component: <any>ResolveTestComponent,
    resolve: {
      test: QuestionResolveService
    },
    canActivate: [
      UserGuard
    ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: `${REDACTOR_TESTS}`,
    component: <any>RedactorTestsComponent,
    resolve: {
      solutions: SolutionsForRedactorResolveService
    },
    canActivate: [
      RedactorGuard
    ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: `${CHECK_TEST}/:test`,
    component: <any>CheckSolvedTestComponent,
    resolve: {
      solution: SolutionResolveService
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
