import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SearchPage from './features/search-page/components/SearchPage';
import ResultsPage from './features/results-page/components/ResultsPage';

function App() {
  return (
    <Routes>
      <Route path=':id' element={<ResultsPage />} />
      <Route path='/' element={<SearchPage />} />
    </Routes>
  );
}

export default App;
