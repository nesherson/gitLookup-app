import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import Search from '../../assets/icons/search.svg';

const Heading = Styled.h1`
  color: #705df2;
  font-size: 3.2rem;
  margin: 15px 0;
`;

const LogoWrapper = Styled.div`
  display: flex;
  align-items: center;
`;

const Icon = Styled.img`
  width: 62px;
  height: auto;
`;

const ResultIcon = Styled.img`
  width: 42px;
  height: auto;
`;

const ResultHeading = Styled.h1`
  color: #705df2;
  font-size: 1.75rem;
  padding: 0;
  margin: 0;
`;

const Wrapper = Styled.div`
  text-align: center;
  margin-bottom: 35px;
`;

const ResultWrapper = Styled.div``;

const LogoText = Styled.p`
  font-size: 0.85rem;
  margin: 0;
`;

const style = {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
};

export const Logo = (props) => {
  return (
    <div>
      {props.type !== 'result' ? (
        <Wrapper>
          <LogoWrapper>
            <Heading>gitL</Heading>
            <Icon src={Search} alt='' />
            <Heading>okup</Heading>
          </LogoWrapper>
          <LogoText>Discover who's upto what...</LogoText>
        </Wrapper>
      ) : (
        <ResultWrapper>
          <LogoWrapper>
            <Link style={style} to='/'>
              <ResultHeading>gitL</ResultHeading>
              <ResultIcon src={Search} alt='' />
              <ResultHeading>okup</ResultHeading>
            </Link>
          </LogoWrapper>
        </ResultWrapper>
      )}
    </div>
  );
};
