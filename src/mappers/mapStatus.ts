import IRow from '../types/row';
import ITest from '../types/test';

const mapStatus = (status: ITest['status']): IRow['status'] => {
  switch (status) {
    case 'ONLINE':
      return 'Online';
    case 'PAUSED':
      return 'Paused';
    case 'STOPPED':
      return 'Stopped';
    default:
      return 'Draft';
  }
};

export default mapStatus;
