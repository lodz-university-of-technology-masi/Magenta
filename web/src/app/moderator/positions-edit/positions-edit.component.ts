import { Component, OnInit } from '@angular/core';
import {Position, Positions} from '../../models/positions';
import {ActivatedRoute} from '@angular/router';
import {PositionsService} from '../services/positions.service';
import {Tests} from '../../models/test';

@Component({
  selector: 'app-positions-edit',
  templateUrl: './positions-edit.component.html',
  styleUrls: ['./positions-edit.component.css']
})
export class PositionsEditComponent implements OnInit {

  positions: Positions;
  tests: Tests;
  name = '';

  constructor(private route: ActivatedRoute,
              private positionService: PositionsService) { }

  ngOnInit() {
    this.positions = this.route.snapshot.data['positions'];
    this.tests = this.route.snapshot.data['tests'];
  }
  add(): void {
    const position = new Position();
    position.name = this.name;
    position.active = false;
    this.positionService.add(position).subscribe(
      result => {
        this.positions.positions.push(result);
      }
    );
  }
  assign(positionId: number, testId: number): void {
    this.positionService.assign(testId, positionId).subscribe();
  }
  setActive(positionId: number, active: boolean): void {
    this.positionService.setActive(positionId, active).subscribe();
  }
  getSelectValue(position: Position): number {
    if (position.test === null) {
      return null;
    }
    return position.test.id;
  }
}
