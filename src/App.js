import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from './components/Logo';
import { SearchField } from './components/SearchField';

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [searchInput, setSearchInput] = useState('');

  console.log(searchInput);

  const handleInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleDataFetch = () => {};

  return (
    <Wrapper>
      <Logo />
      <SearchField
        inputValue={searchInput}
        handleInputChange={handleInputChange}
      />
    </Wrapper>
  );
}

export default App;
