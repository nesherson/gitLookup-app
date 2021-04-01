import React, { useEffect } from 'react';
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

const ResultSearch = Styled.input`
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

const ResultSearchButton = Styled.button`
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

export const SearchField = ({
  handleInputChange,
  setIsInputEmpty,
  inputValue,
  fetchData,
  type,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (inputValue && type !== 'result') handleInputChange('');
  }, []);

  const handleChange = (e) => {
    handleInputChange(e.target.value);
  };

  const handleEmptyInput = (isEmpty) => {
    setIsInputEmpty(isEmpty);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      fetchData();
      type !== 'result' && handleEmptyInput(false);
      history.push(`/${inputValue}`);
    } else {
      type !== 'result' && handleEmptyInput(true);
    }
  };

  return (
    <>
      {type !== 'result' ? (
        <div>
          <form onSubmit={handleSubmit}>
            <SearchLabel htmlFor=''>github.com/</SearchLabel>
            <Search
              type='text'
              id='username'
              name='username'
              placeholder='Enter Github Username'
              value={inputValue}
              onChange={handleChange}
            />
            <SearchButton type='submit'>Search</SearchButton>
          </form>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <SearchLabel htmlFor=''>github.com/</SearchLabel>
          <ResultSearch
            type='text'
            id='username'
            name='username'
            value={inputValue}
            onChange={handleChange}
          />
          <ResultSearchButton type='submit'>Search</ResultSearchButton>
        </form>
      )}
    </>
  );
};
