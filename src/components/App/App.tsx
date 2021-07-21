import React, {ChangeEvent, useEffect, useState} from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Table from '../Table/Table';
import API from '../../api/api';
import {IRow, SortField, SortName, SortType} from '../../types';

enum statusRate {
  Online,
  Paused,
  Stopped,
  Draft
};

const App: React.FC = () => {
  const [tests, setTests] = useState<IRow[]>([]);
  const [formattedTests, setFormattedTests] = useState<IRow[]>([]);
  const [activeSort, setActiveSort] = useState<SortType | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('');

  useEffect(() => {
    API.getTests().then((result) => {
      setTests(result);
      setFormattedTests(result);
    });
  }, []);

  const filter = (array: IRow[], filterValue: string) => {
    if (!filterValue) {
      return array;
    }

    return array.filter(({name}) => {
      return name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };

  const search = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setActiveFilter(value);
    setFormattedTests(filter(tests, value));
  };

  const sort = (field: SortField) => {
    let type: SortName;

    if (activeSort?.field !== field) {
      type = 'ASC';
    } else {
      type = activeSort?.type === 'ASC' ? 'DESC' : 'ASC';
    }

    const result = [...tests].sort((a, b) => {
      if (field === 'status') {
        return type === 'ASC' ? statusRate[a.status] - statusRate[b.status] : statusRate[b.status] - statusRate[a.status];
      }

      return type === 'ASC' ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
    });

    setActiveSort({field, type});
    setTests(result);
    setFormattedTests(filter(result, activeFilter));
  };

  return (
    <>
      <Header />
      <Search search={search} count={formattedTests.length} />
      <Table tests={formattedTests} sort={sort} activeSort={activeSort} />
    </>
  );
};

export default App;
