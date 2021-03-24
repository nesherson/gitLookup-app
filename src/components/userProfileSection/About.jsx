import React from 'react';
import Styled from 'styled-components';
import { Link } from '../userActivitySection/Link';

const Avatar = Styled.div`
    width: 44px;
    height: auto;
    margin: 5px;
`;

const Heading = Styled.h1`
    font-size: 1.04rem;
    font-weight: 500;
    margin: 0 5px;
`;

const ProfilePicture = Styled.img`
    width: 44px;
    height: auto;
    border-radius: 50%;
`;

const UserName = Styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 150px;
`;

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #d9d9d9;
    padding: 14px;
`;

export const About = (props) => {
  const userAbout = props.about;

  return (
    <Wrapper>
      <Avatar>
        <ProfilePicture src={`${userAbout.profilePicture}`} alt={''} />
      </Avatar>
      <UserName>
        <Heading>{userAbout.userName}</Heading>
        <Link url={userAbout.profileUrl}>↗</Link>
        {userAbout.blog ? (
          <Link url={userAbout.blog} type='blog'>
            {userAbout.blog}
          </Link>
        ) : (
          ''
        )}
      </UserName>
    </Wrapper>
  );
};
