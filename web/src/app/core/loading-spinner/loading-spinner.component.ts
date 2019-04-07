import { Component, OnInit } from '@angular/core';
import {
  Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError, Event
} from '@angular/router';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  static showLoadingIndicator = true;
  static setShowLoadingIndicator(showLoadingIndicator: boolean): void {
    LoadingSpinnerComponent.showLoadingIndicator = showLoadingIndicator;
  }
  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        LoadingSpinnerComponent.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        LoadingSpinnerComponent.showLoadingIndicator = false;
      }

    });
  }
  getShowLoadingIndicator(): boolean {
    return LoadingSpinnerComponent.showLoadingIndicator;
  }

  ngOnInit(): void {
  }

}
