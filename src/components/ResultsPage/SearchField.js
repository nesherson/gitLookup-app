import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';

const Search = Styled.input`
  padding: 7px;
  font-size: 1.02rem;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  min-width: 120px;
  &:focus {
    outline: none;
    border-color: #705df2;
  }
`;

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

const SearchLabel = Styled.label`
  padding: 7px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchField = ({ fetchData, searchedInput }) => {
  console.log('results search');
  console.log(searchedInput);
  const [searchInput, setSearchInput] = useState(searchedInput);

  const history = useHistory();

  const handleChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(searchInput);
    history.push(`/${searchInput}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <SearchLabel htmlFor=''>github.com/</SearchLabel>
      <Search
        type='text'
        id='username'
        name='username'
        value={searchInput}
        onChange={handleChange}
      />
      <SearchButton type='submit'>Search</SearchButton>
    </form>
  );
};
