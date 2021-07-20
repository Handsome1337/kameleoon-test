import IRow from '../types/row';
import ITest from '../types/test';

const mapType = (type: ITest['type']): IRow['type'] => {
  switch (type) {
    case 'CLASSIC':
      return 'Classic';
    case 'SERVER_SIDE':
      return 'Server-side';
    default:
      return type;
  }
};

export default mapType;
