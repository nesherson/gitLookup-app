import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from '../components/homepage/Homepage';
import { ResultsPage } from '../components/resultsPage/ResultsPage';

function App() {
  const [userNotFound, setUserNotFound] = useState(false);
  //const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [userActivity, setUserActivity] = useState(null);

  const fetchData = (input) => {
    const MAX_REPOS = 100;

    setTimeout(() => {
      fetch(`https://api.github.com/users/${input}`)
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
            `https://api.github.com/users/${input}/repos?per_page=${MAX_REPOS}`
          )
            .then((resp) => resp.json())
            .then((data) => setUserRepos(data));
          fetch(`https://api.github.com/users/${input}/events`)
            .then((resp) => resp.json())
            .then((data) => setUserActivity(data));
        })
        .catch((err) => console.log(err));
    }, 250);
  };

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage fetchData={fetchData} />
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
              fetchData={fetchData}
            />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
