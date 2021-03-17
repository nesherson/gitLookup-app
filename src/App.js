import React, { useState } from 'react';
import Styled from 'styled-components';
import { Logo } from './components/Logo';
import { SearchField } from './components/SearchField';
import { UserProfileSection } from './components/userProfileSection/UserProfileSection';
import { UserActivitySection } from './components/userActivitySection/UserActivitySection';

const Wrapper = Styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserWrapper = Styled.div`
  display: flex;
`;

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [fetchedUser, setFetchedUser] = useState({});

  console.log(searchInput);

  const handleInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const fetchData = () => {
    fetch('https://api.github.com/users/nesherson')
      .then((resp) => resp.json())
      .then((data) => {
        setFetchedUser(data);
      });
  };

  const handleDataFetch = () => {};

  console.log(fetchedUser);

  const userAbout = {
    userName: fetchedUser.name,
    profilePicture: fetchedUser.avatar_url,
    profileUrl: fetchedUser.html_url,
  };
  return (
    <Wrapper>
      <Logo />
      <SearchField
        inputValue={searchInput}
        handleInputChange={handleInputChange}
        fetchData={fetchData}
      />
      <UserWrapper>
        <UserProfileSection about={userAbout} />
        <UserActivitySection />
      </UserWrapper>
    </Wrapper>
  );
}

export default App;
