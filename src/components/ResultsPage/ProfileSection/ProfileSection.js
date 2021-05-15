import React from 'react';
import Styled from 'styled-components';
import { getCount, parseDate } from '../../../util/helpers.js';
import { About } from './About';
import { UserStats } from './Stats';
import { UserLanguages } from './Languages';
import { UserDates } from './Dates';

const Wrapper = Styled.div`
    border: 1px solid #d9d9d9;
    width: 28%;
    min-width: 280px;
    border-radius: 5px;
    box-shadow: 0px 50px 60px rgba(0,0,0,0.1);
    margin: 0 10px 0 15px;
    @media (max-width: 768px) {
    width: 90%;
    margin: 0 30px 10px 30px;
    box-shadow: 0px 15px 60px rgba(0,0,0,0.1);
  }
`;

export const ProfileSection = ({ profile, repos }) => {
  const about = {
    userName: profile.name,
    profilePicture: profile.avatar_url,
    profileUrl: profile.html_url,
    blog: profile.blog ? profile.blog : null,
  };

  const stars = getCount(repos);
  const forks = getCount(repos);
  const stats = {
    followers: profile.followers,
    following: profile.following,
    stars: stars,
    forks: forks,
  };

  const getLanguages = () => {
    const mappedLang = repos.map((repo) => {
      return repo.language;
    });

    const filterNull = mappedLang.filter((lang) => lang !== null);

    const filterRepeatedValues = filterNull.filter((lang, i, arr) => {
      return arr.indexOf(lang) === i;
    });
    return filterRepeatedValues;
  };

  const languages = getLanguages();

  const dates = {
    createdAt: parseDate(profile.created_at, [
      'en-GB',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    ]),
    location: profile.location,
    updatedAt: parseDate(profile.updated_at, [
      'en-GB',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    ]),
  };

  return (
    <Wrapper>
      <About about={about} />
      <UserStats stats={stats} />
      <UserLanguages languages={languages} />
      <UserDates dates={dates} />
    </Wrapper>
  );
};
