import React from 'react';
import './Table.scss';
import TableRow from '../TableRow/TableRow';
import IRow from "../../types/row";

interface ITableProps {
  tests: IRow[]
}

const Table: React.FC<ITableProps> = ({tests}) => {
  if (!tests.length) {
    return null;
  }

  const tableRows = tests.map(({id, name, type, status, site}) => {
    return <TableRow key={id} data={{name, type, status, site}} />
  });

  return (
    <table>
      <thead>
        <tr>
          <th className="name-column">Name</th>
          <th className="type-column">Type</th>
          <th className="status-column">Status</th>
          <th className="site-column">Site</th>
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
