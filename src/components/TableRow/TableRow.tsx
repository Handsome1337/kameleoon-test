import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {IRow} from '../../types';
import './TableRow.scss';

interface ITableRowProps {
  data: IRow;
}

const TableRow: React.FC<ITableRowProps> = ({data}) => {
  const [isFocused, setIsFocused] = useState(false);

  const {id, name, type, status, site} = data;

  const actionText = status === 'Draft' ? 'finalize' : 'results';

  return (
    <tr
      className={`table-row table-row--${site.split('.').shift()}${isFocused ? ' focused' : ''}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <td className="name-column">{name}</td>
      <td className="type-column">{type}</td>
      <td className={`status-column status-column--${status.toLowerCase()}`}>{status}</td>
      <td className="site-column">{site}</td>
      <td className={`action-column action-column--${actionText.toLowerCase()}`}>
        <Link to={`/${actionText}/${id}`}>{actionText}</Link>
      </td>
    </tr>
  );
};

export default TableRow;
