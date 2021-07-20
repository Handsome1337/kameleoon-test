import IRow from './row';

type SortName = 'ASC' | 'DESC';
type SortField = Exclude<keyof IRow, 'id' | 'status'>;
type SortType = {field: SortField; type: SortName};

export {
  SortName,
  SortField,
  SortType
};
