import {UserRole} from './user-role';

export interface User {
  username: string;
  nameSurname: string;
  email: string;
  roles: UserRole[];
}
