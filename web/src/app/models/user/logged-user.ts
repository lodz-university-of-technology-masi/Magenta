import {UserRole} from './user-role';

export interface LoggedUser {
  username: string;
  email: string;
  roles: UserRole[];
}
