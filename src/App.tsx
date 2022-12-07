import React from "react";
import Styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import { SearchPage } from "./features/search-page";
import { ResultsPage } from "./features/results-page";
import { MainSection, Footer } from "src/components";

const StyledApp = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

function App() {
  return (
    <StyledApp>
      <MainSection>
        <Routes>
          <Route path=":id" element={<ResultsPage />} />
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </MainSection>
      <Footer />
    </StyledApp>
  );
}

export default App;
