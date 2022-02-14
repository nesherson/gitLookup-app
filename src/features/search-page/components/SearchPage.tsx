import React from 'react';
import Styled from 'styled-components';
import Logo from '../../../components/Logo/Logo';
import SearchField from '../../../components/SearchField/SearchField';
import Footer from '../../../components/Layout/Footer/Footer';

const Wrapper = Styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

export const SearchPage: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Logo primary />
        <SearchField primary />
      </Wrapper>
      <Footer />
    </>
  );
};
