import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetricsProcessorDirective} from './metrics-processor.directive';
import {DeviceDetectorModule} from "ngx-device-detector";

@NgModule({
  declarations: [
    MetricsProcessorDirective
  ],
  imports: [
    CommonModule,
    DeviceDetectorModule.forRoot(),
  ],
  exports: [
    MetricsProcessorDirective
  ]
})
export class MetricsProcessorModule {
}
