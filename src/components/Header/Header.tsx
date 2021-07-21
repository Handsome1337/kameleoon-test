import React from 'react';
import './Header.scss';

interface IHeaderProps {
  text: string;
  testName?: string | null;
}

const Header: React.FC<IHeaderProps> = ({text, testName}) => {
  const subheader = testName ? <h2>{testName}</h2> : null;

  return (
    <header className="header">
      <h1>{text}</h1>
      {subheader}
    </header>
  );
};

export default Header;
