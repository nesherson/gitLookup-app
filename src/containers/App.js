import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { fetchUser, fetchRepos, fetchActivities } from '../util/fetchData.js';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Homepage } from '../components/Homepage/Homepage';
import { ResultsPage } from '../components/ResultsPage/ResultsPage';

const Loading = Styled.h1`
font-size: 1.55rem;
display: flex;
align-items: center;
justify-content: center;
`;

function App() {
  const [userNotFound, setUserNotFound] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [userActivities, setUserActivities] = useState(null);
  const [searchedInput, setSearchedInput] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      const input = location.pathname.slice(1);
      fetchData(input);
    }
  }, [location.pathname]);

  const fetchData = (input) => {
    fetchUser(input).then((data) => {
      if (data.name === 'Error') {
        setUserNotFound(true);
        console.log('fetchData func -->', data.name);
        return;
      } else {
        setUserProfile(data);
        setUserNotFound(false);
      }
    });

    fetchRepos(input).then((data) => {
      setUserRepos(data);
    });

    fetchActivities(input).then((data) => {
      setUserActivities(data);
    });
  };

  console.log('userProfile --> ', userProfile);
  console.log('userNotFound --> ', userNotFound);

  return (
    <Switch>
      <Route exact path='/'>
        <Homepage fetchData={fetchData} setSearchedInput={setSearchedInput} />
      </Route>
      <Route path='/:id'>
        {!userProfile ? (
          <Loading>Loading...</Loading>
        ) : (
          <ResultsPage
            userProfile={userProfile}
            userRepos={userRepos}
            userActivity={userActivities}
            userNotFound={userNotFound}
            fetchData={fetchData}
            searchedInput={searchedInput}
          />
        )}
      </Route>
    </Switch>
  );
}

export default App;