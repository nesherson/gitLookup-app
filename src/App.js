import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Styled from 'styled-components';
import { Logo } from './components/Logo';
import { SearchField } from './components/SearchField';
import { UserProfileSection } from './components/userProfileSection/UserProfileSection';
import { UserActivitySection } from './components/userActivitySection/UserActivitySection';

const UserWrapper = Styled.div`
  display: flex;
  align-items: flex-start;
  
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Header = Styled.header`
  display: flex;
  justify-content: space-between;
  margin: 35px 15px 15px 15px;
`;

const SearchPage = Styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

const ResultsPage = Styled.div`
  margin: 0 auto;
  max-width: 980px;
`;

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [aboutUser, setAboutUser] = useState({});
  const [userRepos, setUserRepos] = useState(null);
  const [userActivity, setUserActivity] = useState([]);

  const handleInputChange = (value) => {
    setSearchInput(value);
  };

  const handleEmptyInput = (input) => {
    if (input === '') {
      setIsInputEmpty(true);
      return true;
    } else {
      setIsInputEmpty(false);
      return false;
    }
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

  const user = {
    userName: aboutUser.name,
    profilePicture: aboutUser.avatar_url,
    profileUrl: aboutUser.html_url,
    blog: aboutUser.blog ? aboutUser.blog : null,
  };

  const stats = {
    followers: aboutUser.followers,
    following: aboutUser.following,
    stars: stars,
    forks: forks,
  };

  const dates = {
    createdAt: new Date(aboutUser.created_at).toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    location: aboutUser.location,
    updatedAt: new Date(aboutUser.updated_at).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };

  const activities = !userRepos
    ? null
    : userActivity.map((activity) => {
        return {
          id: activity.id,
          author: activity.repo.name,
          type: activity.type,
          name: activity.repo.name,
          repo: `https://github.com/${activity.repo.name}`,
          payload: activity.payload,
          created_at: activity.payload.created_at,
        };
      });

  return (
    <Router>
      <Route exact path='/'>
        <SearchPage>
          <Logo />
          <SearchField
            inputValue={searchInput}
            handleInputChange={handleInputChange}
            fetchData={fetchData}
            handleEmptyInput={handleEmptyInput}
          />
        </SearchPage>
      </Route>
      <Route path='/:id'>
        {isInputEmpty ? (
          <h2>Please enter a username!</h2>
        ) : (
          <ResultsPage>
            <Header>
              <Logo type='result' />
              <SearchField
                inputValue={searchInput}
                handleInputChange={handleInputChange}
                fetchData={fetchData}
                handleEmptyInput={handleEmptyInput}
                type='result'
              />
            </Header>
            <UserWrapper>
              <UserProfileSection
                about={user}
                stats={stats}
                languages={languages}
                dates={dates}
              />
              <UserActivitySection activities={activities} />
            </UserWrapper>
          </ResultsPage>
        )}
      </Route>
    </Router>
  );
}

export default App;
