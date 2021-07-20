import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Table from '../Table/Table';
import API from '../../api/api';
import {IRow, SortType} from '../../types';

enum statusRate {
  Online,
  Paused,
  Stopped,
  Draft
};

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
      if (field === 'status') {
        return type === 'ASC' ? statusRate[a.status] - statusRate[b.status] : statusRate[b.status] - statusRate[a.status];
      }

      return type === 'ASC' ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
    }));
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
