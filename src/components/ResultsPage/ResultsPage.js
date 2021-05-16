import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {
  fetchUser,
  fetchRepos,
  fetchActivities,
} from '../../util/fetchData.js';
import { getSearchedInput } from '../../util/helpers.js';

import { Logo } from '../UI/Logo/Logo';
import { SearchField } from '../UI/SearchField/SearchField';
import { NotFound } from '../UI/NotFound/NotFound';
import { Footer } from '../UI/Footer/Footer';
import { ProfileSection } from './ProfileSection/ProfileSection';
import { ActivitySection } from './ActivitySection/ActivitySection';
import { LoadingIcon } from '../../assets/icons/LoadingIcon';

const Wrapper = Styled.div`
  margin: 0 auto;
  max-width: 980px;
  min-height: calc(100vh - 100px);
`;

const LoadingScreen = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

const Header = Styled.header`
  display: flex;
  justify-content: space-between;
  margin: 35px 15px 15px 15px;
  @media (max-width: 768px) {
    margin: 35px 35px 15px 35px;
  }
`;

const Profile = Styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ResultsPage = () => {
  const [userNotFound, setUserNotFound] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [userActivities, setUserActivities] = useState(null);

  const location = useLocation();
  const searchedInput = getSearchedInput(location.pathname);

  useEffect(() => {
    const fetchData = () => {
      const input = getSearchedInput(location.pathname);
      fetchUser(input).then((data) => {
        if (data.name === 'Error') {
          setUserNotFound(true);
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
    fetchData();
  }, [location.pathname]);

  const userLoaded =
    !userProfile || !userRepos || !userActivities ? false : true;

  let userPending = !userLoaded ? (
    <LoadingScreen>
      <LoadingIcon />
    </LoadingScreen>
  ) : null;

  if (userNotFound) {
    userPending = <NotFound />;
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Logo />
          <SearchField searchedInput={searchedInput} />
        </Header>
        {userPending}
        {!userNotFound && userLoaded ? (
          <Profile>
            <ProfileSection profile={userProfile} repos={userRepos} />
            <ActivitySection activities={userActivities} />
          </Profile>
        ) : null}
      </Wrapper>
      <Footer />
    </>
  );
};
