import React from 'react';
import IRow from '../../types/row';
import './TableRow.scss';

interface ITableRowProps {
  data: IRow;
}

const TableRow: React.FC<ITableRowProps> = ({data}) => {
  const {name, type, status, site} = data;

  return (
    <tr className="table-row">
      <td className="name-column">{name}</td>
      <td className="type-column">{type}</td>
      <td className="status-column">{status}</td>
      <td className="site-column">{site}</td>
      <td className="action-column"><a>Action</a></td>
    </tr>
  );
}

export default TableRow;
