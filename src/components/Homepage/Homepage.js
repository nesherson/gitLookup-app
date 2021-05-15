import React from 'react';
import Styled from 'styled-components';
import { Logo } from '../UI/Logo/Logo';
import { SearchField } from './SearchField';
import { Footer } from '../Footer/Footer';

const SearchPage = Styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

export const Homepage = () => {
  return (
    <>
      <SearchPage>
        <Logo primary />
        <SearchField />
      </SearchPage>
      <Footer />
    </>
  );
};
