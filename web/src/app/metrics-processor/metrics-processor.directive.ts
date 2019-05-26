import {Directive, HostListener} from '@angular/core';
import {MetricsModel} from "../models/metrics";
import {MetricsProcessorService} from "./services/metrics-processor.service";
import {DeviceDetectorService} from "ngx-device-detector";
import * as html2canvas from "html2canvas";
import {DistanceCalculatorService} from "./services/distance-calculator.service";


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
  private blurTime: number;
  private blurTimeStamp: number;
  private static errorCode: number;

  constructor(private deviceDetector: DeviceDetectorService,
              private metricsProcessorService: MetricsProcessorService,
              private distanceCalculator: DistanceCalculatorService) {

    this.metricsModel = new MetricsModel();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  @HostListener('window:keyup.shift.d', ['$event'])
  dKeyEvent(event: KeyboardEvent) {
    this.storeScreenShot();

    this.distanceCalculator.switchProcessing();

    if (this.isProcessing) {
      this.endTime = event.timeStamp;
      this.stopProcessing();
    } else {
      this.startTime = event.timeStamp;
      this.startProcessing();
    }
    this.isProcessing = !this.isProcessing;
  }

  @HostListener('window:keyup.shift.w', ['$event'])
  wKeyEvent(event: KeyboardEvent) {
    this.distanceCalculator.switchProcessing();
    this.isProcessing = !this.isProcessing;
    console.log("Metrics unsaved");
  }

  @HostListener('window:keyup.shift.r', ['$event'])
  rKeyEvent(event: KeyboardEvent) {
    this.distanceCalculator.switchProcessing();
    if (this.isProcessing) {
      this.endTime = event.timeStamp;
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

  @HostListener('window:scroll', ['$event'])
  mouseWheelMoveEvent(event) {
    if (this.isProcessing) {
      this.distanceCalculator.addScrollDistance(50);
    }
  }

  @HostListener('window:blur', ['$event'])
  onBlur(event: Event): void {
    if (this.isProcessing) {
      this.blurTimeStamp = event.timeStamp;
    }
  }

  @HostListener('window:focus', ['$event'])
  onFocus(event: Event): void {
    if (this.isProcessing) {
      this.blurTime += event.timeStamp - this.blurTimeStamp;
    }
  }

  static assignErrorTypeNumber(errorCode: number): void {
    if (!MetricsProcessorDirective.errorCode) {
      MetricsProcessorDirective.errorCode = errorCode;
    }
}


  private handleClick() {
    if (this.isProcessing) {
      this.metricsModel.incrementClickCount();
    }
  }

  private startProcessing() {
    this.metricsModel = new MetricsModel();
    this.blurTime = 0;
    MetricsProcessorDirective.errorCode = null;
  }

  private stopProcessing(failed = false) {
    this.prepareModelToPersist(failed);
    this.metricsProcessorService.persist(this.metricsModel).subscribe(() => {
      console.log("Metrics saved successfully");
    }, () => {
      console.log("Metrics save failed");
    });
  }

  private prepareModelToPersist(failed = false) {
    this.metricsModel.browser = this.deviceDetector.browser;
    this.metricsModel.width = this.width;
    this.metricsModel.height = this.height;
    this.metricsModel.time = this.endTime - this.startTime - this.blurTime;
    this.metricsModel.failed = failed;
    this.metricsModel.distance = this.distanceCalculator.getDistance();
    if (MetricsProcessorDirective.errorCode) {
      this.metricsModel.errorTypeNumber = MetricsProcessorDirective.errorCode;
    }
  }

  private storeScreenShot() {
    html2canvas(document.body).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      this.metricsProcessorService.saveScreen(imgData).subscribe();
    });
  }
}
