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

const Warning = Styled.p`
  color: #ff1a1a;
`;

export const Homepage = ({
  searchInput,
  handleInputChange,
  fetchData,
  setIsInputEmpty,
  isInputEmpty,
}) => {
  return (
    <>
      <SearchPage>
        <Logo />
        <SearchField
          inputValue={searchInput}
          handleInputChange={handleInputChange}
          fetchData={fetchData}
          setIsInputEmpty={setIsInputEmpty}
        />
        {isInputEmpty ? <Warning>Please enter a username</Warning> : null}
      </SearchPage>
      <Footer />
    </>
  );
};
