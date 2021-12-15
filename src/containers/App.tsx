import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Homepage } from '../components/Homepage/Homepage';
import { ResultsPage } from '../components/ResultsPage/ResultsPage';

function App() {
  return (
    <Routes>
      <Route path=':id' element={<ResultsPage />} />
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
}

export default App;

