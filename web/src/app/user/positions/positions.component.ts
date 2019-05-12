import { Component, OnInit } from '@angular/core';
import {Positions} from '../../models/positions';
import {ActivatedRoute, Router} from '@angular/router';
import {RESOLVE_TEST_PAGE} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  positions: Positions;

  ngOnInit(): void {
    this.positions =  this.route.snapshot.data['positions'];
  }
  resolveTest(id: number): void {
    this.router.navigate([RESOLVE_TEST_PAGE, id]);
  }
}
