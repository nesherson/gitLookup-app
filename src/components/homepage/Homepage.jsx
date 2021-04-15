import React from 'react';
import { useLocation } from 'react-router-dom';
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

export const Homepage = ({
  searchInput,
  setSearchInput,
  handleInputChange,
  fetchData,
  setIsInputEmpty,
  isInputEmpty,
}) => {
  const location = useLocation();

  return (
    <>
      <SearchPage>
        <Logo />
        <SearchField
          searchInput={searchInput}
          handleInputChange={handleInputChange}
          fetchData={fetchData}
          setIsInputEmpty={setIsInputEmpty}
          setSearchInput={setSearchInput}
        />
      </SearchPage>
      <Footer />
    </>
  );
};
