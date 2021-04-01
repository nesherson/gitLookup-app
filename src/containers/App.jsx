import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from '../components/homepage/Homepage';
import { ResultsPage } from '../components/ResultsPage/ResultsPage';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [userNotFound, setUserNotFound] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
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
        setUserProfile(data);
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

  console.log(userProfile);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage
            searchInput={searchInput}
            handleInputChange={handleInputChange}
            fetchData={fetchData}
            setIsInputEmpty={setIsInputEmpty}
            isInputEmpty={isInputEmpty}
          />
        </Route>
        <Route path='/:id'>
          {!userProfile ? (
            <h1>Loading</h1>
          ) : (
            <ResultsPage
              userProfile={userProfile}
              userRepos={userRepos}
              userActivity={userActivity}
              userNotFound={userNotFound}
              searchInput={searchInput}
              handleInputChange={handleInputChange}
              fetchData={fetchData}
              setIsInputEmpty={setIsInputEmpty}
            />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
