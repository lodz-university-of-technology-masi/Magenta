import {Route, RouterModule} from '@angular/router';
import {MODERATOR_PAGE_URL, MODERATOR_TESTS_PAGE_URL} from '../shared/utils/frontend-urls';
import {TestsResolveService} from '../tests/services/tests-resolve.service';
import {ModeratorPageComponent} from './moderator-page/moderator-page.component';
import {NgModule} from '@angular/core';
import {PositionsResolveService} from './services/positions-resolve.service';
import {ModeratorTestsComponent} from './moderator-tests/moderator-tests.component';

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
