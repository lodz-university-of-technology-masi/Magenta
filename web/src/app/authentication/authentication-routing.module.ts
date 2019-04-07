import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {LOGIN_PAGE_URL, REGISTER_PAGE_URL, RESET_PASSWORD_PAGE_URL} from '../shared/utils/frontend-urls';
import {ResetPasswordComponent} from './login-page/reset-password/reset-password.component';
import {NotLoggedUserGuard} from '../guards/not-logged-user-quard';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';


const AUTHENTICATION_PAGE_ROUTES: Route[] = [
  {
    path: REGISTER_PAGE_URL,
    component: <any>RegistrationPageComponent,
    canActivate: [NotLoggedUserGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: LOGIN_PAGE_URL,
    component: <any>LoginPageComponent,
    canActivate: [NotLoggedUserGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RESET_PASSWORD_PAGE_URL,
    component: <any>ResetPasswordComponent,
    canActivate: [NotLoggedUserGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(AUTHENTICATION_PAGE_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationRoutingModule {}
