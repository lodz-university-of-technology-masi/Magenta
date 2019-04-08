import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {RouterModule} from '@angular/router';
import { ErrorPanelComponent } from './error-panel/error-panel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoadingSpinnerComponent,
    ErrorPanelComponent
  ],
  declarations: [
    HeaderComponent,
    LoadingSpinnerComponent,
    ErrorPanelComponent
  ]
})
export class CoreModule { }
