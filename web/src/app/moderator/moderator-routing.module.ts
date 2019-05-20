import {Route, RouterModule} from '@angular/router';
import {
  ADD_REDACTOR_PAGE_URL,
  MODERATOR_PAGE_URL,
  MODERATOR_REDACTORS_PAGE_URL,
  MODERATOR_TESTS_PAGE_URL
} from '../shared/utils/frontend-urls';
import {TestsResolveService} from '../tests/services/tests-resolve.service';
import {ModeratorPageComponent} from './moderator-page/moderator-page.component';
import {NgModule} from '@angular/core';
import {PositionsResolveService} from './services/positions-resolve.service';
import {ModeratorTestsComponent} from './moderator-tests/moderator-tests.component';
import {RedactorsListComponent} from './redactors-list/redactors-list.component';
import {RedactorsResolveService} from './services/redactors-resolve.service';
import {AddRedactorComponent} from './add-redactor/add-redactor.component';

const MODERATOR_PAGE_ROUTES: Route[] = [
  {
    path: MODERATOR_PAGE_URL,
    component: <any>ModeratorPageComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      positions: PositionsResolveService,
      tests: TestsResolveService
    }
  },
  {
    path: MODERATOR_TESTS_PAGE_URL,
    component: <any>ModeratorTestsComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      tests: TestsResolveService
    }
  },
  {
    path: MODERATOR_REDACTORS_PAGE_URL,
    component: <any>RedactorsListComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      redactors: RedactorsResolveService
    }
  },
  {
    path: ADD_REDACTOR_PAGE_URL,
    component: <any>AddRedactorComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(MODERATOR_PAGE_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})

export class ModeratorRoutingModule {
}
