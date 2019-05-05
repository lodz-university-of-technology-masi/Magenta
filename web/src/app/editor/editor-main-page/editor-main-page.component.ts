import {Component, OnInit} from '@angular/core';
import {Test} from '../../models/test';
import {User} from '../../models/user/user';
import {UserRole} from '../../models/user/user-role';

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
  role: UserRole = new class implements UserRole {
    name: 'sasa';
  };
  users: User[] = [
    {
      username: 'Janek',
      email: 'Janek@gmail.com',
      roles: [this.role]
    },
    {
      username: 'Ania',
      email: 'Ania@gmail.com',
      roles: [this.role]
    }
  ];
  selectedTest: Test;
  selectedUser: User;

  constructor() {
  }


  checkIfSelectedTestIsNull(): Boolean {
    return this.selectedTest == null;
  }

  checkIfSelectedTestAndUserIsNull(): Boolean {
    return this.selectedTest == null || this.selectedUser == null;
  }

  ngOnInit(): void {
  }

  onCheckTestButtonClick(): void {

  }

  onEditTestButtonClick(): void {

  }

  onCreateTestButtonClick(): void {

  }

  onDeleteTestButtonClick(): void {

  }
}
