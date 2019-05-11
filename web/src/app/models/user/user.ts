import {UserRole} from './user-role';

export interface Users {
  users: User[];
}

export interface User {
  username: string;
  nameSurname: string;
  email: string;
  roles: UserRole[];
}
