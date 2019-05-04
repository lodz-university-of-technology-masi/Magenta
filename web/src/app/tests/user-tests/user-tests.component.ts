import { Component, OnInit } from '@angular/core';
import {Solutions} from '../../models/question';
import {MY_SOLUTIONS} from '../../shared/utils/frontend-urls';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-tests',
  templateUrl: './user-tests.component.html',
  styleUrls: ['./user-tests.component.css']
})
export class UserTestsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  solutions: Solutions;
  mySolutions = MY_SOLUTIONS;
  ngOnInit() {
    this.solutions = this.route.snapshot.data['solutions'];
  }

}
