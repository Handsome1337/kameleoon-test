import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import Header from '../../Header/Header';
import API from '../../../api/api';
import './ActionPage.scss';

interface IRouteParams {
  testId: string;
}

const ActionPage: React.FC = () => {
  const headerText = useLocation().pathname.split('/')[1];
  const {testId} = useParams<IRouteParams>();
  const [testName, setTestName] = useState<string | null>(null);

  useEffect(() => {
    API.getTest(testId).then(({name}) => {
      setTestName(name);
    });
  }, [testId]);

  return (
    <>
      <Header text={headerText} testName={testName} />
      <Link to="/" className="back-link">Back</Link>
    </>
  );
};

export default ActionPage;
