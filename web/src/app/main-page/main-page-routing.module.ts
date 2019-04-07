import {Route, RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page/main-page.component';
import {MAIN_PAGE_URL} from '../shared/utils/frontend-urls';

const MAIN_PAGE_ROUTES: Route[] = [
  {
    path: `${MAIN_PAGE_URL}`,
    component: <any>MainPageComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(MAIN_PAGE_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})

export class MainPageRoutingModule {}
