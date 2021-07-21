import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import ActionPage from '../Pages/ActionPage/ActionPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/results/:testId" component={ActionPage} />
        <Route path="/finalize/:testId" component={ActionPage} />
      </Switch>
    </Router>
  );
};

export default App;
