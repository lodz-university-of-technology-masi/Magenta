import {UserRole} from './user-role';

export interface LoggedUser {
  username: string;
  email: string;
  nameSurname: string;
  language: string;
  roles: UserRole[];
}
