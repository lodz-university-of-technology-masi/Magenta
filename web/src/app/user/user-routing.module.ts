import {Route, RouterModule} from '@angular/router';
import {USER_PAGE_URL} from '../shared/utils/frontend-urls';
import {NgModule} from '@angular/core';
import {PositionsResolveService} from './services/positions-resolve.service';
import {UserGuard} from '../guards/user-guard';
import {UserPageComponent} from './user-page/user-page.component';
import {UserSolutionsResolveService} from '../tests/services/user-solutions-resolve.service';

const USER_PAGE_ROUTES: Route[] = [
  {
    path: USER_PAGE_URL,
    component: <any>UserPageComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      positions: PositionsResolveService,
      solutions: UserSolutionsResolveService
    },
    canActivate: [
      UserGuard
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(USER_PAGE_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule {
}
