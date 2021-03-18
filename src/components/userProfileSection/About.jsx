import React from 'react';
import Styled from 'styled-components';

const Avatar = Styled.div`
    width: 44px;
    height: auto;
    
`;

const Heading = Styled.h1`
    font-size: 1.30rem;
`;

const ProfilePicture = Styled.img`
    width: 44px;
    height: auto;
`;

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #000;
    padding: 12px;
`;

export const About = (props) => {
  const userAbout = props.about;

  return (
    <Wrapper>
      <Avatar>
        <ProfilePicture
          src={`${userAbout.profilePicture}`}
          alt={!userAbout.profilePicture ? '' : 'Diamod shaped abstract figure'}
        />
      </Avatar>
      <div>
        <Heading>{userAbout.userName}</Heading>
        <a
          href={`${userAbout.profileUrl}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {userAbout.profileUrl}
        </a>
      </div>
    </Wrapper>
  );
};
