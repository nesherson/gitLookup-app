import React from 'react';
import Styled from 'styled-components';

const Input = Styled.input`
  padding: 7px;
  font-size: 1.02rem;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  width: ${(props) => (props.primary ? '350px' : '')};
  min-width: ${(props) => (props.primary ? '280px' : '')};
  &:focus {
    outline: none;
    border-color: #705df2;
  }
`;

const InputLabel = Styled.label`
  padding: 7px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputField = ({ primary, searchInput, onChange }) => {
  return (
    <>
      {primary ? <InputLabel htmlFor='username'>github.com/</InputLabel> : null}
      <Input
        primary={primary}
        type='text'
        id='username'
        name='username'
        value={searchInput}
        onChange={onChange}
      />
    </>
  );
};
