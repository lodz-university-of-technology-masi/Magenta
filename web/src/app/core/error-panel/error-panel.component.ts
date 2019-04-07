import { Component, OnInit } from '@angular/core';
import {ErrorHandlingService} from '../../shared/services/error-handling.service';

@Component({
  selector: 'app-error-panel',
  templateUrl: './error-panel.component.html',
  styleUrls: ['./error-panel.component.css']
})
export class ErrorPanelComponent implements OnInit {

  constructor(private errorHandlingService: ErrorHandlingService) { }

  ngOnInit(): void {
  }
  hasError(): boolean {
    return this.errorHandlingService.hasError();
  }
  errorCode(): number {
    return this.errorHandlingService.getErrorCode();
  }
  errorMessage(): string {
    return this.errorHandlingService.getErrorMessage();
  }
}
