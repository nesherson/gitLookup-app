import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from './components/Logo';
import { SearchField } from './components/SearchField';
import { UserProfileDetails } from './components/userProfileDetails/UserProfileDetails';

const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [fetchedUser, setFetchedUser] = useState({});

  console.log(searchInput);

  const handleInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const fetchData = async (url = '') => {
    fetch('https://api.github.com/users/nesherson')
      .then((resp) => resp.json())
      .then((data) => {
        setFetchedUser(data);
      });
  };

  const handleDataFetch = () => {};

  console.log(fetchedUser);
  return (
    <Wrapper>
      <Logo />
      <SearchField
        inputValue={searchInput}
        handleInputChange={handleInputChange}
        fetchData={fetchData}
      />
      <UserProfileDetails />
    </Wrapper>
  );
}

export default App;
