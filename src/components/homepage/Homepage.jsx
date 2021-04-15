import React from 'react';
import Styled from 'styled-components';
import { Logo } from '../Logo';
import { SearchField } from '../SearchField';
import { Footer } from '../Footer';

const SearchPage = Styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

export const Homepage = ({ setSearchedInput, fetchData }) => {
  return (
    <>
      <SearchPage>
        <Logo />
        <SearchField
          setSearchedInput={setSearchedInput}
          fetchData={fetchData}
        />
      </SearchPage>
      <Footer />
    </>
  );
};
