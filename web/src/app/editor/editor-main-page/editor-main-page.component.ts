import {Component, OnInit} from '@angular/core';
import {Test} from '../../models/test';

@Component({
  selector: 'app-editor-main-page',
  templateUrl: './editor-main-page.component.html',
  styleUrls: ['./editor-main-page.component.css']
})
export class EditorMainPageComponent implements OnInit {

  tests: Test[] = [
    {
      id: 1,
      name: 'Test 1'
    },
    {
      id: 2,
      name: 'Test 2'
    },
    {
      id: 3,
      name: 'Test 3'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
