import {Route, RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {RedactorMainPageComponent} from './redactor-main-page/redactor-main-page.component';
import {REDACTOR_PAGE_URL} from '../shared/utils/frontend-urls';
import {TestsResolveService} from '../tests/services/tests-resolve.service';
import {RedactorsResolveService} from '../tests/services/redactors-resolve.service';

const REDACTOR_PAGE_ROUTES: Route[] = [
  {
    path: REDACTOR_PAGE_URL,
    component: <any>RedactorMainPageComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      tests: TestsResolveService,
      redactors: RedactorsResolveService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(REDACTOR_PAGE_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})

export class RedactorRoutingModule {
}
