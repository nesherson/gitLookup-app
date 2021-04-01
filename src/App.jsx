import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Styled from 'styled-components';
import { Logo } from './components/Logo';
import { SearchField } from './components/SearchField';
import { UserProfileSection } from './components/userProfileSection/UserProfileSection';
import { UserActivitySection } from './components/userActivitySection/UserActivitySection';
import { NotFound } from './components/NotFound';
import { Footer } from './components/Footer';

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

const Warning = Styled.p`
  color: #ff1a1a;
`;

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [userNotFound, setUserNotFound] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [aboutUser, setAboutUser] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [userActivity, setUserActivity] = useState(null);

  const handleInputChange = (value) => {
    setSearchInput(value);
  };

  const fetchData = () => {
    const MAX_REPOS = 100;

    fetch(`https://api.github.com/users/${searchInput}`)
      .then((resp) => {
        if (resp.status === 404) {
          setUserNotFound(true);
          throw new Error('Not Found.');
        } else {
          setUserNotFound(false);
          return resp.json();
        }
      })
      .then((data) => {
        setAboutUser(data);
        fetch(
          `https://api.github.com/users/${searchInput}/repos?per_page=${MAX_REPOS}`
        )
          .then((resp) => resp.json())
          .then((data) => setUserRepos(data));
        fetch(`https://api.github.com/users/${searchInput}/events`)
          .then((resp) => resp.json())
          .then((data) => setUserActivity(data));
      })
      .catch((err) => console.log(err));
  };

  const stars = !userRepos
    ? ''
    : userRepos.reduce((acc, repo) => {
        return (acc += repo.stargazers_count);
      }, 0);

  const forks = !userRepos
    ? ''
    : userRepos.reduce((acc, repo) => {
        return (acc += repo.forks_count);
      }, 0);

  const languages = !userRepos
    ? ''
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

  const user = !aboutUser
    ? ''
    : {
        userName: aboutUser.name,
        profilePicture: aboutUser.avatar_url,
        profileUrl: aboutUser.html_url,
        blog: aboutUser.blog ? aboutUser.blog : null,
      };

  const stats = !aboutUser
    ? ''
    : {
        followers: aboutUser.followers,
        following: aboutUser.following,
        stars: stars,
        forks: forks,
      };

  const dates = !userRepos
    ? ''
    : {
        createdAt: new Date(aboutUser.created_at).toLocaleDateString('en-GB', {
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
    ? ''
    : userActivity.map((activity) => {
        console.log(activity.payload.created_at);
        return {
          id: activity.id,
          author: activity.repo.name,
          type: activity.type,
          name: activity.repo.name,
          repo: `https://github.com/${activity.repo.name}`,
          payload: activity.payload,
          created_at: new Date(activity.created_at).toLocaleDateString(
            undefined,
            {
              month: 'short',
              day: 'numeric',
            }
          ),
        };
      });

  console.log(isInputEmpty);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <SearchPage>
            <Logo />
            <SearchField
              inputValue={searchInput}
              handleInputChange={handleInputChange}
              fetchData={fetchData}
              setIsInputEmpty={setIsInputEmpty}
            />
            {isInputEmpty ? <Warning>Please enter a username</Warning> : null}
          </SearchPage>
          <Footer />
        </Route>
        <Route path='/:id'>
          <ResultsPage>
            <Header>
              <Logo type='result' />
              <SearchField
                inputValue={searchInput}
                handleInputChange={handleInputChange}
                fetchData={fetchData}
                setIsInputEmpty={setIsInputEmpty}
                type='result'
              />
            </Header>
            {userNotFound ? (
              <NotFound />
            ) : (
              <UserWrapper>
                <UserProfileSection
                  about={user}
                  stats={stats}
                  languages={languages}
                  dates={dates}
                />
                <UserActivitySection activities={activities} />
              </UserWrapper>
            )}
            <Footer />
          </ResultsPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
