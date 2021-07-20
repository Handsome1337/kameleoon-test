import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Table from '../Table/Table';
import API from '../../api/api';
import IRow from '../../types/row';

const App: React.FC = () => {
  const [tests, setTests] = useState<IRow[]>([]);

  useEffect(() => {
    API.getTests().then(result => {
      setTests(result);
    })
  }, [])


  return (
    <>
      <Header />
      <Search />
      <Table tests={tests} />
    </>
  );
}

export default App;
