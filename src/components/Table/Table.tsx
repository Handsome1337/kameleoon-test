import React, {MouseEventHandler, useState} from 'react';
import './Table.scss';
import TableRow from '../TableRow/TableRow';
import IRow from '../../types/row';
import Sort from '../../types/sort';

interface ITableProps {
  tests: IRow[];
  sortByName: Function;
}

const Table: React.FC<ITableProps> = ({tests, sortByName}) => {
  const [nameSortType, setNameSortType] = useState<Sort | null>(null);

  if (!tests.length) {
    return null;
  }

  const tableRows = tests.map(({id, name, type, status, site}) => {
    return <TableRow key={id} data={{name, type, status, site}} />
  });

  const onSortByNameClick: MouseEventHandler<HTMLButtonElement> = () => {
    const sortType = nameSortType === 'ASC' ? 'DESC' : 'ASC';

    setNameSortType(sortType);
    sortByName(sortType);
  };

  return (
    <table>
      <thead>
        <tr>
          <th className="name-column"><button className={`${nameSortType ? nameSortType : ''}`} onClick={onSortByNameClick}>Name</button></th>
          <th className="type-column"><button>Type</button></th>
          <th className="status-column"><button>Status</button></th>
          <th className="site-column"><button>Site</button></th>
          <th className="action-column">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export default Table;
