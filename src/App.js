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
  const [aboutUser, setAboutUser] = useState({});
  const [userRepos, setUserRepos] = useState(null);

  console.log(searchInput);

  const handleInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const fetchData = () => {
    fetch('https://api.github.com/users/himanshub16')
      .then((resp) => resp.json())
      .then((data) => {
        setAboutUser(data);
      });
    fetch('https://api.github.com/users/himanshub16/repos')
      .then((resp) => resp.json())
      .then((data) => setUserRepos(data));
  };

  console.log(userRepos);

  const stars = !userRepos
    ? null
    : userRepos.reduce((acc, repo) => {
        return (acc += repo.stargazers_count);
      }, 0);

  const forks = !userRepos
    ? null
    : userRepos.reduce((acc, repo) => {
        return (acc += repo.forks_count);
      }, 0);

  const languages = !userRepos
    ? null
    : userRepos
        .map((repo) => {
          return repo.language;
        })
        .filter((lang) => {
          if (lang !== null) return lang;
        })
        .filter((lang, i, arr) => {
          return arr.indexOf(lang) === i;
        });

  console.log(languages);

  const userAbout = {
    userName: aboutUser.name,
    profilePicture: aboutUser.avatar_url,
    profileUrl: aboutUser.html_url,
  };

  const userStats = {
    followers: aboutUser.followers,
    following: aboutUser.following,
    stars: stars,
    forks: forks,
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
        <UserProfileSection
          about={userAbout}
          stats={userStats}
          languages={languages}
        />
        <UserActivitySection />
      </UserWrapper>
    </Wrapper>
  );
}

export default App;
