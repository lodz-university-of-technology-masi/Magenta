export class MousePosition {
  private readonly x: number;
  private readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get getX() {
    return this.x;
  }

  get getY() {
    return this.y;
  }
}
