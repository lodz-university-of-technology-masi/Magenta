import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RedactorMainPageComponent} from './redactor-main-page/redactor-main-page.component';
import {RedactorRoutingModule} from './redactor-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RedactorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
  declarations: [RedactorMainPageComponent],
  exports : [RedactorMainPageComponent]
})
export class RedactorModule {
}
