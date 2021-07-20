import React, {useState} from 'react';
import './Table.scss';
import TableRow from '../TableRow/TableRow';
import IRow from '../../types/row';
import Sort from '../../types/sort';

type SortField = Exclude<keyof IRow, 'id' | 'status'>;
export type SortType = {field: SortField; type: Sort};

interface ITableProps {
  tests: IRow[];
  sort: (activeSort: SortType) => void;
}

const Table: React.FC<ITableProps> = ({tests, sort}) => {
  const [activeSort, setActiveSort] = useState<SortType | null>(null);

  if (!tests.length) {
    return null;
  }

  const tableRows = tests.map(({id, name, type, status, site}) => {
    return <TableRow key={id} data={{name, type, status, site}} />;
  });

  const onSortClick = (field: SortField) => {
    let type: Sort;

    if (activeSort?.field !== field) {
      type = 'ASC';
    } else {
      type = activeSort?.type === 'ASC' ? 'DESC' : 'ASC';
    }

    setActiveSort({field, type});
    sort({field, type});
  };

  const renderDefaultSortButton = (text: SortField) => (
    <button
      className={activeSort?.field === text ? activeSort.type : undefined}
      onClick={() => {
        onSortClick(text)
      }}
    >
      {text}
    </button>
  );

  return (
    <table>
      <thead>
        <tr>
          <th className="name-column">{renderDefaultSortButton('name')}</th>
          <th className="type-column">{renderDefaultSortButton('type')}</th>
          <th className="status-column"><button>Status</button></th>
          <th className="site-column">{renderDefaultSortButton('site')}</th>
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
