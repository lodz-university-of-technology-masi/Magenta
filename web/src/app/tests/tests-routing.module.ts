import {Route, RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {
  ADD_QUESTIONS,
  CHECK_TEST,
  MY_SOLUTIONS,
  TEST_PAGE_URL,
  SOLUTIONS_PAGE_URL,
  RESOLVE_TEST,
  TRANSLATE_TEST_PAGE_URL
} from '../shared/utils/frontend-urls';
import {RedactorGuard} from '../guards/redactor-quard';
import {TestEditorComponent} from './test-editor/test-editor.component';
import {QuestionResolveService} from './services/question-resolve.service';
import {ResolveTestComponent} from './resolve-test/resolve-test.component';
import {UserGuard} from '../guards/user-guard';
import {SolutionsForRedactorResolveService} from './services/solutions-for-redactor-resolve.service';
import {RedactorTestsComponent} from './redactor-tests/redactor-tests.component';
import {CheckSolvedTestComponent} from './check-solved-test/check-solved-test.component';
import {SolutionResolveService} from './services/solution-resolve.service';
import {UserTestsComponent} from './user-tests/user-tests.component';
import {UserSolutionComponent} from './user-solution/user-solution.component';
import {UserSolutionsResolveService} from './services/user-solutions-resolve.service';
import {RedactorOrModeratorGuard} from '../guards/redactor-or-moderator-guard';
import {TestResolveService} from './services/test-resolve.service';

const MAIN_PAGE_ROUTES: Route[] = [
  {
    path: `${TEST_PAGE_URL}/:test/${ADD_QUESTIONS}`,
    component: <any>TestEditorComponent,
    resolve: {
      questions: QuestionResolveService,
      test: TestResolveService
    },
    canActivate: [
      RedactorOrModeratorGuard
    ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: `${TRANSLATE_TEST_PAGE_URL}/:test/${ADD_QUESTIONS}`,
    component: <any>TestEditorComponent,
    resolve: {
      questions: QuestionResolveService,
      test: TestResolveService
    },
    canActivate: [
      RedactorOrModeratorGuard
    ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: `${TEST_PAGE_URL}/${ADD_QUESTIONS}`,
    component: <any>TestEditorComponent,
    canActivate: [
      RedactorOrModeratorGuard
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
    path: `${SOLUTIONS_PAGE_URL}`,
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
  {
    path: `${MY_SOLUTIONS}`,
    component: <any>UserTestsComponent,
    resolve: {
      solutions: UserSolutionsResolveService
    },
    canActivate: [
      UserGuard
    ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: `${MY_SOLUTIONS}/:test`,
    component: <any>UserSolutionComponent,
    resolve: {
      solution: SolutionResolveService
    },
    canActivate: [
      UserGuard
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
