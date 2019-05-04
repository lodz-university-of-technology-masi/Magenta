import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorMainPageComponent} from './editor-main-page/editor-main-page.component';
import {EditorRoutingModule} from './editor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EditorRoutingModule
  ],
  declarations: [EditorMainPageComponent],
  exports : [EditorMainPageComponent]
})
export class EditorModule {
}
