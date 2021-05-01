import React from 'react';
import Styled from 'styled-components';

import { Logo } from '../Logo/Logo';
import { SearchField } from './SearchField/SearchField';
import { NotFound } from '../NotFound/NotFound';
import { Footer } from '../Footer/Footer';
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

export const ResultsPage = ({
  userProfile,
  userRepos,
  userActivities,
  fetchData,
  userNotFound,
  searchedInput,
}) => {

  const userLoaded = !userProfile || !userRepos || !userActivities ? false : true;
  
  return (
    <>
      <Wrapper>
        <Header>
          <Logo type='result' />
          <SearchField fetchData={fetchData} searchedInput={searchedInput} />
        </Header>
        { userNotFound ? <NotFound /> : null }
        { !userProfile || !userRepos || !userActivities ? 
        <LoadingScreen>
          <LoadingIcon />
        </LoadingScreen>
           : null }
        {!userNotFound && userLoaded ? 
          <Profile>
            <ProfileSection
              profile={userProfile}
              repos={userRepos}
            />
            <ActivitySection activities={userActivities} />
          </Profile>
        : null }
       
      </Wrapper>
      <Footer />
    </>
  );
};

/*
<Content>
        { userNotFound ? <NotFound /> : null }
        { !userProfile || !userRepos || !userActivities ? 
        <LoadingScreen>
          <LoadingIcon />
        </LoadingScreen>
           : null }
        {!userNotFound && userLoaded ? 
          <Profile>
            <ProfileSection
              profile={userProfile}
              repos={userRepos}
            />
            <ActivitySection activities={userActivities} />
          </Profile>
        : null }
        </Content>

*/