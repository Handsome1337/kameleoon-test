import IRow from './row';

type SortName = 'ASC' | 'DESC';
type SortField = Exclude<keyof IRow, 'id'>;
type SortType = {field: SortField; type: SortName};

export type {
  SortName,
  SortField,
  SortType
};
