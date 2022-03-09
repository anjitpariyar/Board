// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface TableProps {
  id: string;
  title: string;
  writer: string;
  viewcount: number;
}

export interface PaginationProps {
  totalCount: number;
  pageSize: number;
  currentPage: number;
}

export interface PaginationOptions {
  currentPage: number; //required
  pageSize: number; //required
  onPageChange: any; //required
  totalData: any; //required'
  prev: any; // default is <,
  next: any; // default is >,
  paginationSize?: number; //default is 5
  trimmer?: boolean; // default is true
  goto?: boolean; // default is true, that show an example
}
