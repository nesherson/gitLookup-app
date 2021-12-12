import React from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import { Homepage } from '../components/Homepage/Homepage';
import { ResultsPage } from '../components/ResultsPage/ResultsPage';

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path='/*' element={<Homepage />}>
        
      </Route>
      <Route path='/temp/:id'>
        <ResultsPage />
      </Route>
    </Routes>
  );
}

export default App;
