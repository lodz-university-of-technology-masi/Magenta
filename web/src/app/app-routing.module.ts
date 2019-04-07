import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from './error/not-found/not-found.component';
import {
  MAIN_PAGE_URL, NOT_FOUND_PAGE_URL,
} from './shared/utils/frontend-urls';


const APP_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `${MAIN_PAGE_URL}`
  },
  {
    path: NOT_FOUND_PAGE_URL,
    component: <any>NotFoundComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
