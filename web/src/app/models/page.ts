import {Pageable} from './pageable';
import {Sort} from './sort';

export interface Page<T> {
  content: T[];
  first: boolean;
  last: boolean;
  number: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}

