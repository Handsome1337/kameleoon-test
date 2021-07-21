import React from 'react';
import './Table.scss';
import TableRow from '../TableRow/TableRow';
import {IRow, SortField, SortType} from '../../types';

interface ITableProps {
  tests: IRow[];
  sort: (field: SortField) => void;
  activeSort: SortType | null;
}

const Table: React.FC<ITableProps> = ({tests, sort, activeSort}) => {
  if (!tests.length) {
    return null;
  }

  const tableRows = tests.map((test) => {
    return <TableRow key={test.id} data={{...test}} />;
  });

  const renderSortButton = (text: SortField) => (
    <button
      className={activeSort?.field === text ? activeSort.type : undefined}
      onClick={() => sort(text)}
    >
      {text}
    </button>
  );

  return (
    <table>
      <thead>
        <tr>
          <th className="name-column">{renderSortButton('name')}</th>
          <th className="type-column">{renderSortButton('type')}</th>
          <th className="status-column">{renderSortButton('status')}</th>
          <th className="site-column">{renderSortButton('site')}</th>
          <th className="action-column">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

export default Table;
