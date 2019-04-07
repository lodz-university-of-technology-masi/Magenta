import { Component, OnInit } from '@angular/core';
import {MAIN_PAGE_URL} from '../../shared/utils/frontend-urls';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  url = MAIN_PAGE_URL;

  constructor() {
  }

  ngOnInit(): void {
  }
}
