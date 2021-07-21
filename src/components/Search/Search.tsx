import React, {ChangeEventHandler} from 'react';
import './Search.scss';

interface ISearchProps {
  activeFilter: string;
  search: ChangeEventHandler<HTMLInputElement>;
  count: number;
}

const Search: React.FC<ISearchProps> = ({activeFilter, search, count}) => {
  return (
    <div className="search-bar">
      <input type="text" onChange={search} value={activeFilter} placeholder="What test are you looking for?" />
      <span>{count} tests</span>
    </div>
  );
};

export default Search;
