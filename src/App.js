import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import SearchField from './components/SearchField';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 200px;
`;

function App() {
  const [searchInput, setSearchInput] = useState('');

  console.log(searchInput);

  return (
    <Wrapper>
      <div>
        <Logo />
        <SearchField onSubmit={(value) => setSearchInput(value)} />
        <button>Search</button>
      </div>
    </Wrapper>
  );
}

export default App;
