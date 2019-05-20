import {Directive, HostListener} from '@angular/core';
import {MetricsModel} from "../models/metrics";
import {MetricsProcessorService} from "./services/metrics-processor.service";

@Directive({
  selector: '[appMetricsProcessor]'
})
export class MetricsProcessorDirective {

  private readonly width: number;
  private readonly height: number;

  private metricsModel: MetricsModel;

  private isProcessing: boolean;
  private startTime: number;
  private endTime: number;

  constructor(private metricsProcessorService: MetricsProcessorService) {
    this.metricsModel = new MetricsModel();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  @HostListener('window:keyup.shift.d', ['$event'])
  wKeyEvent(event: KeyboardEvent) {
    if (this.isProcessing) {
      this.stopProcessing();
    } else {
      this.startProcessing();
    }
    this.isProcessing = !this.isProcessing;
  }

  @HostListener('window:keyup.shift.r', ['event'])
  rKeyEvent(event: KeyboardEvent) {
    if (this.isProcessing) {
      this.stopProcessing(true);
      this.isProcessing = false;
    }
  }

  @HostListener('window:click', ['$event'])
  clickEvent(event) {
    this.handleClick();
  }

  @HostListener('window:contextmenu', ['$event'])
  rightClickEvent(event) {
    this.handleClick();
  }

  @HostListener('window:auxclick', ['$event'])
  mouseWheelClickEvent(event) {
    this.handleClick();
  }

  private handleClick() {
    if (this.isProcessing) {
      this.metricsModel.incrementClickCount();
    }
  }

  private startProcessing() {
    this.startTime = Date.now();
    this.metricsModel = new MetricsModel();
  }

  private stopProcessing(failed = false) {
    this.endTime = Date.now();

    this.prepareModelToPersist(failed);
    this.metricsProcessorService.persist(this.metricsModel).subscribe(() => {
      alert("Metrics saved successfully");
    }, () => {
      alert("Metrics save failed");
    });
  }

  private prepareModelToPersist(failed = false) {
    this.metricsModel.width = this.width;
    this.metricsModel.height = this.height;
    this.metricsModel.time = this.endTime - this.startTime;
    this.metricsModel.failed = failed;
  }
}
