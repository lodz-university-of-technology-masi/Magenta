import {UserRole} from './user-role';

export interface User {
  username: string;
  email: string;
  roles: UserRole[];
}
