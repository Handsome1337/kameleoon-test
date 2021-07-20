import React from 'react';
import IRow from '../../types/row';
import './TableRow.scss';

interface ITableRowProps {
  data: Omit<IRow, 'id'>;
}

const TableRow: React.FC<ITableRowProps> = ({data}) => {
  const {name, type, status, site} = data;

  const actionText = status === 'Online' || status === 'Paused' ? 'Results' : 'Finalize';

  return (
    <tr className={`table-row table-row--${site.split('.').shift()}`}>
      <td className="name-column">{name}</td>
      <td className="type-column">{type}</td>
      <td className={`status-column status-column--${status.toLowerCase()}`}>{status}</td>
      <td className="site-column">{site}</td>
      <td className={`action-column action-column--${actionText.toLowerCase()}`}><a>{actionText}</a></td>
    </tr>
  );
}

export default TableRow;
