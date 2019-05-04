import {Component, Input, OnInit} from '@angular/core';
import {TestSolutionWithId} from '../../models/question';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-check-solved-test',
  templateUrl: './check-solved-test.component.html',
  styleUrls: ['./check-solved-test.component.css']
})
export class CheckSolvedTestComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  solution: TestSolutionWithId;

  ngOnInit() {
    this.solution = this.route.snapshot.data['solution'];
  }

}
