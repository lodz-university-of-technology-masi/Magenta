import { Component, OnInit } from '@angular/core';
import {Users} from '../../models/user/user';
import {RedactorService} from '../services/redactor.service';
import {ActivatedRoute, Route} from '@angular/router';
import {ADD_REDACTOR_PAGE_URL} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-redactors-list',
  templateUrl: './redactors-list.component.html',
  styleUrls: ['./redactors-list.component.css']
})
export class RedactorsListComponent implements OnInit {

  addRedactor = ADD_REDACTOR_PAGE_URL;
  redactors: Users;

  constructor(private redactorService: RedactorService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.redactors =  this.route.snapshot.data['redactors'];
  }
  delete(username: string, index: number): void {
    this.redactorService.delete(username)
      .subscribe(() => {
        this.redactors.users.splice(index, 1);
      });
  }
}
