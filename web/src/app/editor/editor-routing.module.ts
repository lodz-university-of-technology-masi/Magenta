import {Route, RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {EditorMainPageComponent} from './editor-main-page/editor-main-page.component';
import {EDITOR_PAGE_URL} from '../shared/utils/frontend-urls';

const EDITOR_PAGE_ROUTES: Route[] = [
  {
    path: `${EDITOR_PAGE_URL}`,
    component: <any>EditorMainPageComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(EDITOR_PAGE_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})

export class EditorRoutingModule {
}
