import React from 'react';
import Styled from 'styled-components';

import Logo from 'src/components/Logo/Logo';
import SearchField from 'src/components/SearchField/SearchField';
import Footer from 'src/components/Layout/Footer/Footer';

const Wrapper = Styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

const SearchPage: React.FC = () => {
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

export default SearchPage;
