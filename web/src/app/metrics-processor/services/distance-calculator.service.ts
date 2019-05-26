import {Injectable} from '@angular/core';
import {MousePosition} from "../../models/mouse-position";

@Injectable({
  providedIn: 'root'
})
export class DistanceCalculatorService {

  private positions: MousePosition[];
  private isProcessing: boolean = false;
  private scrollDistance: number = 0;

  constructor() {
  }

  switchProcessing(interrupted?: boolean): void {
    if (interrupted) {
      this.isProcessing = false;
    } else {
      this.isProcessing = !this.isProcessing;
    }
    if (this.isProcessing) {
      this.resetValues();
    }
  }

  addPosition(event: MouseEvent): void {
    if (this.isProcessing) {
      this.positions.push(new MousePosition(event.clientX, event.clientY));
    }
  }

  getDistance(): number {
    return this.calculateDistance();
  }

  addScrollDistance(dst: number): void {
    this.scrollDistance += dst;
  }

  private calculateDistance(): number {
    if (this.positions.length) {
      let distance = this.calcPointsDistance(new MousePosition(0, 0), this.positions.shift());

      for (let i = 1; i < this.positions.length - 1; i++) {
        distance += this.calcPointsDistance(this.positions[i], this.positions[i + 1]);
      }

      return distance;
    }
  }

  private resetValues(): void {
    this.positions = [];
    this.scrollDistance = 0;
  }

  private calcPointsDistance(p1: MousePosition, p2: MousePosition): number {
    return Math.sqrt(Math.pow(p2.getX - p1.getX, 2) + Math.pow(p2.getY - p1.getY, 2)) + this.scrollDistance;
  }
}
