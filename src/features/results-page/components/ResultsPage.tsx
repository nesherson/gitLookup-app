import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { useLocation } from "react-router-dom";

import { User, Repo, Activity } from "src/types";
import { fetchUser, fetchRepos, fetchActivities } from "src/util/fetchData";
import { getSearchQuery } from "src/util/helpers";

import { Logo } from "src/components";
import { Search } from "src/components";
import { NotFound } from "src/components";
import { ProfileSection } from "src/features/results-page";
import { ActivitySection } from "src/features/results-page";
import LoadingIcon from "src/assets/icons/LoadingIcon";

const Container = Styled.div`
  margin: 0 auto;
  max-width: 980px;
`;

const Loader = Styled.div`
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
  const [userProfile, setUserProfile] = useState<User>({} as User);
  const [userRepos, setUserRepos] = useState<Repo[]>([]);
  const [userActivities, setUserActivities] = useState<Activity[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchQuery = getSearchQuery(location.pathname);

        setIsLoading(true);
        setNotFound(false);

        const user = await fetchUser(searchQuery);
        const repos = await fetchRepos(searchQuery);
        const activities = await fetchActivities(searchQuery);

        setUserProfile(user);
        setUserRepos(repos);
        setUserActivities(activities);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setNotFound(true);
      }
    };

    fetchData();
  }, [location.pathname]);

  return (
    <Container>
      <Header>
        <Logo />
        <Search />
      </Header>
      {isLoading && (
        <Loader>
          <LoadingIcon />
        </Loader>
      )}
      {!isLoading && !notFound && (
        <Profile>
          <ProfileSection profile={userProfile} repos={userRepos} />
          <ActivitySection activities={userActivities} />
        </Profile>
      )}
      {notFound && <NotFound />}
    </Container>
  );
};

export default ResultsPage;
