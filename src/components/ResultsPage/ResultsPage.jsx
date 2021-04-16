import React from 'react';
import Styled from 'styled-components';
import { Logo } from '../Logo';
import { SearchField } from './SearchField';
import { NotFound } from '../NotFound';
import { Footer } from '../Footer';
import { UserProfileSection } from './ProfileSection/UserProfileSection';
import { UserActivitySection } from './ActivitySection/UserActivitySection';

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
  userActivity,
  fetchData,
  userNotFound,
  searchedInput,
}) => {
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
    : (() => {
        const mappedLang = userRepos.map((repo) => {
          return repo.language;
        });

        const filterNull = mappedLang.filter((lang) => lang !== null);

        const filterRepeatedValues = filterNull.filter((lang, i, arr) => {
          return arr.indexOf(lang) === i;
        });
        return filterRepeatedValues;
      })();

  const user = !userProfile
    ? ''
    : {
        userName: userProfile.name,
        profilePicture: userProfile.avatar_url,
        profileUrl: userProfile.html_url,
        blog: userProfile.blog ? userProfile.blog : null,
      };

  const stats = !userProfile
    ? ''
    : {
        followers: userProfile.followers,
        following: userProfile.following,
        stars: stars,
        forks: forks,
      };

  const dates = !userProfile
    ? ''
    : {
        createdAt: new Date(userProfile.created_at).toLocaleDateString(
          'en-GB',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        ),
        location: userProfile.location,
        updatedAt: new Date(userProfile.updated_at).toLocaleDateString(
          'en-GB',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        ),
      };

  return (
    <>
      <Wrapper>
        <Header>
          <Logo type='result' />
          <SearchField fetchData={fetchData} searchedInput={searchedInput} />
        </Header>
        {userNotFound ? (
          <NotFound />
        ) : user === '' ? (
          <h1>Loading</h1>
        ) : (
          <UserWrapper>
            <UserProfileSection
              about={user}
              stats={stats}
              languages={languages}
              dates={dates}
            />
            <UserActivitySection activities={userActivity} />
          </UserWrapper>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};
