import React from "react";
import Styled from "styled-components";

import { User, Repo } from "src/types";

import { getCount, parseDate } from "../../../../util/helpers";

import About from "./About";
import UserStats from "./Stats";
import UserLanguages from "./Languages";
import UserDates from "./Dates";

const Wrapper = Styled.div`
    border: 1px solid #d9d9d9;
    width: 28%;
    min-width: 280px;
    border-radius: 5px;
    box-shadow:
  1.9px 5.1px 5.3px -4px rgba(0, 0, 0, 0.028),
  6.5px 17.2px 19.7px -4px rgba(0, 0, 0, 0.038),
  29px 77px 93px -4px rgba(0, 0, 0, 0.07)
;
    margin: 0 10px 0 15px;
    @media (max-width: 768px) {
    width: 90%;
    margin: 0 30px 10px 30px;
  }
`;

type ProfileSectionProps = {
  profile: User;
  repos: Repo[];
};

function ProfileSection({ profile, repos }: ProfileSectionProps) {
  const about = {
    userName: profile.name,
    profilePicture: profile.avatar_url,
    profileUrl: profile.html_url,
    blog: profile.blog,
  };

  const stars: number = getCount(repos);
  const forks: number = getCount(repos);
  const stats = {
    followers: profile.followers,
    following: profile.following,
    stars: stars,
    forks: forks,
  };

  const getLanguages = () => {
    const mappedLang = repos?.map((repo) => {
      return repo.language;
    });

    const filterNull = mappedLang?.filter((lang) => lang !== null);

    const filterRepeatedValues = filterNull?.filter((lang, i, arr) => {
      return arr.indexOf(lang) === i;
    });

    return filterRepeatedValues;
  };

  const languages = getLanguages();

  const dates = {
    createdAt: parseDate(profile.created_at, "en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    location: profile?.location,
    updatedAt: parseDate(profile.updated_at, "en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  return (
    <Wrapper>
      <About {...about} />
      <UserStats {...stats} />
      <UserLanguages languages={languages} />
      <UserDates {...dates} />
    </Wrapper>
  );
}

export default ProfileSection;
