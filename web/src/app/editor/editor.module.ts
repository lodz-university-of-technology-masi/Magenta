import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorMainPageComponent} from './editor-main-page/editor-main-page.component';
import {EditorRoutingModule} from './editor-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EditorRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [EditorMainPageComponent],
  exports : [EditorMainPageComponent]
})
export class EditorModule {
}
