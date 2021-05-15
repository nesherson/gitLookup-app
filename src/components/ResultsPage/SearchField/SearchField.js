import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';

import { InputField } from '../../UI/InputField/InputField';

const SearchButton = Styled.button`
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 8px 15px;
  border: none;
  border-radius: 3px;
  background-color: #705df2;
  color: #fff;
  @media (max-width: 768px) {
    display: block;
    margin: 10px auto 0 auto;
  }
`;

export const SearchField = ({ searchedInput }) => {
  const [searchInput, setSearchInput] = useState(searchedInput);

  const history = useHistory();

  const handleOnChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${searchInput}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField searchInput={searchInput} onChange={handleOnChange} />
      <SearchButton type='submit'>Search</SearchButton>
    </form>
  );
};
