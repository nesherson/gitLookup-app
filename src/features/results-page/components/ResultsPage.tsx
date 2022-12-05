import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { User, Repo, Activity } from 'src/types';
import { fetchUser, fetchRepos, fetchActivities } from "src/util/fetchData";
import { getSearchQuery } from 'src/util/helpers';

import Logo from 'src/components/Logo/Logo';
import SearchField from 'src/components/SearchField/Search';
import NotFound from 'src/components/NotFound/NotFound';
import Footer from 'src/components/Layout/Footer/Footer';
import ProfileSection from 'src/features/results-page/components/ProfileSection/ProfileSection';
import ActivitySection from 'src/features/results-page/components/ActivitySection/ActivitySection';
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

const ResultsPage = () => {
  const [notFound, setNotFound] = useState(false);
  const [userProfile, setUserProfile] = useState<User>({} as User);
  const [userRepos, setUserRepos] = useState<Repo[]>([]);
  const [userActivities, setUserActivities] = useState<Activity[]>([]);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchQuery = getSearchQuery(location.pathname);

        const user = await fetchUser(searchQuery);
        const repos = await fetchRepos(searchQuery);
        const activities = await fetchActivities(searchQuery);

        setUserProfile(user);
        setUserRepos(repos);
        setUserActivities(activities);
      } catch (error) {
        setNotFound(true);
      }
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

  if (notFound) {
    userPending = <NotFound />;
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Logo />
          <SearchField />
        </Header>
        {userPending}
        {!notFound && userLoaded ? (
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
