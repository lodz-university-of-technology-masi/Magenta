import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetricsProcessorDirective} from './metrics-processor.directive';

@NgModule({
  declarations: [
    MetricsProcessorDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MetricsProcessorDirective
  ]
})
export class MetricsProcessorModule {
}
