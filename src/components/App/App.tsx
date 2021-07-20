import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Table from '../Table/Table';
import API from '../../api/api';
import {IRow, SortType} from '../../types';

const App: React.FC = () => {
  const [tests, setTests] = useState<IRow[]>([]);
  const [formattedTests, setFormattedTests] = useState<IRow[]>([]);

  useEffect(() => {
    API.getTests().then((result) => {
      setTests(result);
      setFormattedTests(result);
    });
  }, []);

  const sort = ({field, type}: SortType) => {
    setFormattedTests([...formattedTests].sort((a, b) => {
      if (type === 'ASC') {
        return a[field].localeCompare(b[field]);
      }

      return b[field].localeCompare(a[field]);
    }))
  };

  return (
    <>
      <Header />
      <Search count={formattedTests.length} />
      <Table tests={formattedTests} sort={sort} />
    </>
  );
};

export default App;
