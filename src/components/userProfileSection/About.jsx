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
  const profilePicture = props.about.profilePicture;
  const userName = props.about.userName;
  const profileUrl = props.about.profileUrl;
  const userBlog = props.about.blog;

  return (
    <Wrapper>
      <Avatar>
        <ProfilePicture src={`${profilePicture}`} alt={''} />
      </Avatar>
      <UserName>
        <Heading>{userName}</Heading>
        <Link url={profileUrl}>↗</Link>
        {userBlog ? (
          <Link url={userBlog} type='blog'>
            {userBlog}
          </Link>
        ) : (
          ''
        )}
      </UserName>
    </Wrapper>
  );
};
