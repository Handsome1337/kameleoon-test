import React, {MouseEventHandler} from 'react';
import './NotFound.scss';

interface INotFoundProps {
  resetFilter: MouseEventHandler<HTMLButtonElement>;
}

const NotFound: React.FC<INotFoundProps> = ({resetFilter}) => {
  return (
    <div className="not-found">
      <h2>Your search did not match any results.</h2>
      <button className="reset-button" onClick={resetFilter}>Reset</button>
    </div>
  );
};

export default NotFound;
