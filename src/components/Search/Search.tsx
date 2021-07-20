import React from 'react';
import './Search.scss';

const Search: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="What test are you looking for?" />
      <span>tests</span>
    </div>
  );
}

export default Search;
