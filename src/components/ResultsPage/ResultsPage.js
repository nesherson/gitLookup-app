import React from 'react';
import Styled from 'styled-components';
import { getCount } from '../../util/helpers.js';
import { parseDate } from '../../util/helpers.js';
import { Logo } from '../Logo/Logo';
import { SearchField } from './SearchField/SearchField';
import { NotFound } from '../NotFound/NotFound';
import { Footer } from '../Footer/Footer';
import { UserProfileSection } from './ProfileSection/ProfileSection';
import { UserActivitySection } from './ActivitySection/ActivitySection';

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
  const stars = getCount(userRepos, userNotFound);
  const forks = getCount(userRepos, userNotFound);

  const languages = userNotFound
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

  const user = userNotFound
    ? ''
    : {
        userName: userProfile.name,
        profilePicture: userProfile.avatar_url,
        profileUrl: userProfile.html_url,
        blog: userProfile.blog ? userProfile.blog : null,
      };

  const stats = userNotFound
    ? ''
    : {
        followers: userProfile.followers,
        following: userProfile.following,
        stars: stars,
        forks: forks,
      };

  const dates = userNotFound
    ? ''
    : {
        createdAt: parseDate(userProfile.created_at, [
          'en-GB',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          },
        ]),
        location: userProfile.location,
        updatedAt: parseDate(userProfile.updated_at, [
          'en-GB',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          },
        ]),
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
            <ActivitySection activities={userActivity} />
          </UserWrapper>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};
