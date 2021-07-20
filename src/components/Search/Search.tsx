import React from 'react';
import './Search.scss';

interface ISearchProps {
  count: number;
}

const Search: React.FC<ISearchProps> = ({count}) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="What test are you looking for?" />
      <span>{count} tests</span>
    </div>
  );
};

export default Search;
