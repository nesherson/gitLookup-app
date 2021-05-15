import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';

import { InputField } from '../InputField/InputField';

const SearchButton = Styled.button`
  font-size: 1rem;
  letter-spacing: 1px;
  padding: ${(props) => (props.primary ? '8px 30px' : '8px 15px')};
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

const checkSearchedInput = (searchedInput) => {
  return typeof searchedInput === 'undefined' ? '' : searchedInput;
};

export const SearchField = ({ primary, searchedInput }) => {
  const [searchInput, setSearchInput] = useState(
    checkSearchedInput(searchedInput)
  );
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

  const emptyInputWarning = primary ? (
    <Warning>Please enter a username</Warning>
  ) : null;

  return (
    <>
      <div>
        <form onSubmit={handleOnSubmit}>
          <InputField
            primary={primary}
            searchInput={searchInput}
            onChange={handleOnChange}
          />
          <SearchButton primary={primary} type='submit'>
            Search
          </SearchButton>
        </form>
        {isInputEmpty && emptyInputWarning}
      </div>
    </>
  );
};
