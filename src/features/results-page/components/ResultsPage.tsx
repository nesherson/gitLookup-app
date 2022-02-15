import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { fetchUser, fetchRepos, fetchActivities } from 'src/util/fetchData.js';
import { getSearchedInput } from 'src/util/helpers.js';

import Logo from 'src/components/Logo/Logo';
import SearchField from 'src/components/SearchField/SearchField';
import NotFound from 'src/components/NotFound/NotFound';
import Footer from 'src/components/Layout/Footer/Footer';
import ProfileSection from './ProfileSection/ProfileSection';
import ActivitySection from './ActivitySection/ActivitySection';
import LoadingIcon from 'src/assets/icons/LoadingIcon';

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

export interface IActivity {
  id: number;
  author: string;
  type: string;
  name: string;
  repo: string;
  payload: IPayload;
  created_at: string;
}

interface IPayload {
  comment: any;
  issue: any;
  size: number;
  ref_type: string;
  ref: string;
  pull_request: any;
}

export interface IProfile {
  name: string;
  avatar_url: string;
  html_url: string;
  blog?: string;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  location: string;
}

export interface IRepo {
  language: any;
  stargazers_count: number;
}

const ResultsPage = () => {
  const [userNotFound, setUserNotFound] = useState(false);
  const [userProfile, setUserProfile] = useState<IProfile | null>(null);
  const [userRepos, setUserRepos] = useState<IRepo[] | null>(null);
  const [userActivities, setUserActivities] = useState<IActivity[]>([]);

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

export default ResultsPage;
