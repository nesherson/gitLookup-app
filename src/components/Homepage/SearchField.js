import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';

import { InputField } from '../UI/InputField/InputField';

const SearchButton = Styled.button`
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 8px 30px;
  border: none;
  border-radius: 3px;
  background-color: #705df2;
  color: #fff;
  @media (max-width: 768px) {
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Warning = Styled.p`
  color: #ff1a1a;
  text-align: center;
`;

export const SearchField = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const history = useHistory();

  const handleOnChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      setIsInputEmpty(false);
      history.push(`/${searchInput}`);
    } else {
      setIsInputEmpty(true);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleOnSubmit}>
          <InputField
            primary
            searchInput={searchInput}
            onChange={handleOnChange}
          />
          <SearchButton type='submit'>Search</SearchButton>
        </form>
        {isInputEmpty ? <Warning>Please enter a username</Warning> : null}
      </div>
    </>
  );
};
