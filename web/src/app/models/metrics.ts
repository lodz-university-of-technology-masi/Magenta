export class MetricsModel {
  clickCount = 0;
  width: number;
  height: number;
  time: number;
  failed: boolean;

  incrementClickCount() {
    this.clickCount++;
  }
}
