import './Table.scss';
import TableRow from '../TableRow/TableRow';

function Table() {
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
        <TableRow data={{name: 'Name', type: 'Type', status: 'Status', site: 'Site'}} />
        <TableRow data={{name: 'Name', type: 'Type', status: 'Status', site: 'Site'}} />
        <TableRow data={{name: 'Name', type: 'Type', status: 'Status', site: 'Site'}} />
      </tbody>
    </table>
  );
}

export default Table;
