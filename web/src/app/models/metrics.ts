export class MetricsModel {
  clickCount = 0;
  browser: string;
  width: number;
  height: number;
  time: number;
  distance: number;
  failed: boolean;
  errorTypeNumber: number;

  incrementClickCount() {
    this.clickCount++;
  }
}
