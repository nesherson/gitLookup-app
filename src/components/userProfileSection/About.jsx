import React from 'react';
import Styled from 'styled-components';

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

const Link = Styled.a`
  margin: 0 5px;
  font-size: 0.92rem;
`;

const ProfilePicture = Styled.img`
    width: 44px;
    height: auto;
    border-radius: 50%;
`;

const UserName = Styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #000;
    padding: 14px;
`;

export const About = (props) => {
  const userAbout = props.about;

  return (
    <Wrapper>
      <Avatar>
        <ProfilePicture
          // src={`${userAbout.profilePicture}`}
          // alt={!userAbout.profilePicture ? '' : 'Diamod shaped abstract figure'}
          src={'https://avatars.githubusercontent.com/u/36080467?v=4'}
        />
      </Avatar>
      <UserName>
        <Heading>{/*userAbout.userName*/}Nesad Omeragic</Heading>
        <a
          // href={userAbout.profileUrl}
          href='#'
          target='_blank'
          rel='noopener noreferrer'
        >
          ↗
        </a>
        {true ? (
          <Link href={userAbout.blog} target='_blank' rel='noopener noreferrer'>
            {/* {userAbout.blog} */}
            https://www.userblog.com
          </Link>
        ) : null}
      </UserName>
    </Wrapper>
  );
};
