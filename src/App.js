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
  const [userActivity, setUserActivity] = useState([]);

  const handleInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const fetchData = () => {
    fetch(`https://api.github.com/users/${searchInput}`)
      .then((resp) => resp.json())
      .then((data) => setAboutUser(data));
    fetch(`https://api.github.com/users/${searchInput}/repos`)
      .then((resp) => resp.json())
      .then((data) => setUserRepos(data));
    fetch(`https://api.github.com/users/${searchInput}/events`)
      .then((resp) => resp.json())
      .then((data) => setUserActivity(data));
  };

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

  const userDates = {
    createdAt: new Date(aboutUser.created_at).toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    location: aboutUser.location,
    updatedAt: new Date(aboutUser.updated_at).toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };

  const activities = !userRepos
    ? null
    : userActivity.map((activity) => {
        return {
          author: activity.repo.name,
          type: activity.type,
          name: activity.repo.name,
          repo: `https://github.com/${activity.repo.name}`,
          payload: activity.payload,
        };
      });

  console.log(activities);

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
          dates={userDates}
        />
        <UserActivitySection activities={activities} />
      </UserWrapper>
    </Wrapper>
  );
}

export default App;
