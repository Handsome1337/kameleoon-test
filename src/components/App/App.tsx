import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Table from '../Table/Table';
import API from '../../api/api';
import IRow from '../../types/row';
import Sort from '../../types/sort';

const App: React.FC = () => {
  const [tests, setTests] = useState<IRow[]>([]);
  const [formattedTests, setFormattedTests] = useState<IRow[]>([]);

  useEffect(() => {
    API.getTests().then(result => {
      setTests(result);
      setFormattedTests(result);
    })
  }, []);

  const sortByName = (type: Sort) => {
    setFormattedTests([...formattedTests].sort((a, b) => {
      if (type === 'ASC') {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    }))
  };


  return (
    <>
      <Header />
      <Search count={formattedTests.length} />
      <Table tests={formattedTests} sortByName={sortByName} />
    </>
  );
}

export default App;
