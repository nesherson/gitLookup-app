import React from 'react';
import Styled from 'styled-components';
import { Link } from '../ActivitySection/Link';

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
  padding: 5px 0;
`;

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #d9d9d9;
    padding: 14px;
`;

export const About = ({about}) => {
  return (
    <Wrapper>
      <Avatar>
        <ProfilePicture src={`${about.profilePicture}`} alt={''} />
      </Avatar>
      <UserName>
        <Heading>{about.userName}</Heading>
        <Link url={about.profileUrl}>↗</Link>
        {about.blog ? (
          <Link url={about.blog} type='blog'>
            {about.blog}
          </Link>
        ) : (
          ''
        )}
      </UserName>
    </Wrapper>
  );
};
