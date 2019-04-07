import { Component, OnInit } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private errorHandlingService: ErrorHandlingService) { }

  ngOnInit(): void {
    this.errorHandlingService.clear();
  }

}
