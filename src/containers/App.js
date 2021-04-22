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
  const [isLoading, setIsLoading] = useState(false);
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

    setIsLoading(true);

    if (userProfile || userRepos || userActivities) {
      setUserProfile(null);
      setUserRepos(null);
      setUserActivities(null);
      setUserNotFound(false);
    }

    setTimeout(() => {
    fetchUser(input).then((data) => {
      if (data.name === 'Error') {
        setUserNotFound(true);
        setIsLoading(false);
        return;
      } else {
        setUserProfile(data);
        setUserNotFound(false);
        setIsLoading(false);
      }
    });

    fetchRepos(input).then((data) => {
      setUserRepos(data);
    });

    fetchActivities(input).then((data) => {
      setUserActivities(data);
    });
  }, 600);
  };

  return (
    <Switch>
      <Route exact path='/'>
        <Homepage fetchData={fetchData} setSearchedInput={setSearchedInput} />
      </Route>
      <Route path='/:id'>   
     { isLoading ? <h1>Loading...</h1>:
          <ResultsPage
            userProfile={userProfile}
            userRepos={userRepos}
            userActivities={userActivities}
            userNotFound={userNotFound}
            fetchData={fetchData}
            searchedInput={searchedInput}
            isLoading={isLoading}
          />
     }
      </Route>
    </Switch>
  );
}

export default App;
