import React from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';
import Search from '../../assets/icons/search.svg';

const Container = Styled.div<{ primary?: boolean }>`
  text-align: center;
  margin-bottom: ${(props) => (props.primary ? '35px' : '0')};
`;

const Heading = Styled.h1<{ primary?: boolean }>`
  color: #705df2;
  font-size: ${(props) => (props.primary ? '3.2rem' : '1.75rem')};
  margin: ${(props) => (props.primary ? '15px 0' : '0')};
  padding: ${(props) => (props.primary ? 'inherit' : '0')};
`;

const LinkItem = Styled(NavLink)` 
    text-decoration: none;
    display: flex;
    align-items: center;
`;

const LogoWrapper = Styled.div`
  display: flex;
  align-items: center;
`;

const Icon = Styled.img<{ primary?: boolean }>`
  width: ${(props) => (props.primary ? '62px' : '42px')};
  height: auto;
`;

const LogoText = Styled.p`
  font-size: 0.85rem;
  margin: 0;
`;

interface LogoProps {
  primary?: boolean;
}

function Logo({ primary }: LogoProps) {
  let logo = (
    <>
      <Heading primary={primary}>gitL</Heading>
      <Icon primary={primary} src={Search} alt='' />
      <Heading primary={primary}>okup</Heading>
    </>
  );

  if (!primary) {
    logo = (
      <>
        <LinkItem to='/'>
          <Heading primary={primary}>gitL</Heading>
          <Icon primary={primary} src={Search} alt='' />
          <Heading primary={primary}>okup</Heading>
        </LinkItem>
      </>
    );
  }

  return (
    <div>
      <Container primary={primary}>
        <LogoWrapper>{logo}</LogoWrapper>
        {primary ? <LogoText>Discover who's upto what...</LogoText> : null}
      </Container>
    </div>
  );
};

export default Logo;
