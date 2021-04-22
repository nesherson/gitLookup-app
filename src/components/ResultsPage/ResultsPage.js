import React from 'react';
import Styled from 'styled-components';
import { Logo } from '../Logo/Logo';
import { SearchField } from './SearchField/SearchField';
import { NotFound } from '../NotFound/NotFound';
import { Footer } from '../Footer/Footer';
import { ProfileSection } from './ProfileSection/ProfileSection';
import { ActivitySection } from './ActivitySection/ActivitySection';

const Wrapper = Styled.div`
  margin: 0 auto;
  max-width: 980px;
  min-height: calc(100vh - 100px);
`;

const Header = Styled.header`
  display: flex;
  justify-content: space-between;
  margin: 35px 15px 15px 15px;
`;

const UserWrapper = Styled.div`
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
  
  return (
    <>
      <Wrapper>
        <Header>
          <Logo type='result' />
          <SearchField fetchData={fetchData} searchedInput={searchedInput} />
        </Header>
        {userNotFound ? (
          <NotFound />
        ) : !userProfile || !userRepos || !userActivities ? (
          <h1>Loading</h1>
        ) : (
          <UserWrapper>
            <ProfileSection
              profile={userProfile}
              repos={userRepos}
            />
            <ActivitySection activities={userActivities} />
          </UserWrapper>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};
