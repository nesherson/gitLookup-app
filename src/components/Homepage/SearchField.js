import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';

const Search = Styled.input`
  padding: 7px;
  font-size: 1.02rem;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  width: 350px;
  min-width: 280px;
  &:focus {
    outline: none;
    border-color: #705df2;
  }
`;

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

const SearchLabel = Styled.label`
  padding: 7px;
  @media (max-width: 768px) {
    display: none;
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

  const handleChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleSubmit = (e) => {
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
        <form onSubmit={handleSubmit}>
          <SearchLabel htmlFor='username'>github.com/</SearchLabel>
          <Search
            type='text'
            id='username'
            name='username'
            placeholder='Enter Github Username'
            value={searchInput}
            onChange={handleChange}
          />
          <SearchButton type='submit'>Search</SearchButton>
        </form>
        {isInputEmpty ? <Warning>Please enter a username</Warning> : null}
      </div>
    </>
  );
};
