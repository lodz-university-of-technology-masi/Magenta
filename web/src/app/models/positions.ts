import {Test} from './test';

export class Positions {
  positions: Position[];
}
export class Position {
  id: number;
  name: string;
  active: boolean;
  test: Test;
}
