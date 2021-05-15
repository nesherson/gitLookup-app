import React from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';

import { Homepage } from '../components/Homepage/Homepage';
import { ResultsPage } from '../components/ResultsPage/ResultsPage';

function App() {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route path='/:id'>
        <ResultsPage />
      </Route>
    </Switch>
  );
}

export default App;
