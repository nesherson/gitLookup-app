import React from "react";
import Styled from "styled-components";

import { User, Repo } from "src/types";

import { getCount, parseDate } from "../../../../util/helpers";

import About from "./About";
import UserStats from "./Stats";
import UserLanguages from "./UserLanguages";
import UserDates from "./Dates";

const Wrapper = Styled.div`
    border: 1px solid #d9d9d9;
    width: 28%;
    min-width: 280px;
    border-radius: 5px;
    box-shadow:
  0px 0.7px 2.1px -3px rgba(0, 0, 0, 0.028),
  0px 2.2px 7.1px -3px rgba(0, 0, 0, 0.042),
  0px 10px 32px -3px rgba(0, 0, 0, 0.07)
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

  const languages = repos
    ?.map((repo) => repo.language)
    ?.filter((lang) => lang !== null)
    ?.filter((lang, i, arr) => arr.indexOf(lang) === i);

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
