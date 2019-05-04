import {Component, Input, OnInit} from '@angular/core';
import {TestSolutionWithId} from '../../models/question';

@Component({
  selector: 'app-solved-test',
  templateUrl: './solved-test.component.html',
  styleUrls: ['./solved-test.component.css']
})
export class SolvedTestComponent implements OnInit {

  constructor() { }

  @Input()
  solution: TestSolutionWithId;

  ngOnInit() {
  }

}
