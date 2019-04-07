import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {USER_EDIT_PAGE_URL} from '../shared/utils/frontend-urls';
import {UserEditPageComponent} from './user-edit-page/user-edit-page.component';
import {LoggedUserGuard} from '../guards/logged-user-guard';
import {LoggedUserResolveService} from './services/logged-user-resolve.service';


const USER_EDIT_PAGE_ROUTES: Route[] = [
  {
    path: `${USER_EDIT_PAGE_URL}`,
    component: <any>UserEditPageComponent,
    resolve: {
      user: LoggedUserResolveService
    },
    canActivate: [LoggedUserGuard],
    runGuardsAndResolvers: 'always'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(USER_EDIT_PAGE_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})
export class UserEditRoutingModule {}
