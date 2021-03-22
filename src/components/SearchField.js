import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 7px;
  font-size: 1.02rem;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  width: 350px;
  &:focus {
    outline: none;
    border-color: #705df2;
  }
`;

const SearchButton = styled.button`
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 8px 30px;
  border: none;
  border-radius: 3px;
  background-color: #705df2;
  color: #fff;
`;

const SearchLabel = styled.label`
  padding: 7px;
`;

export const SearchField = ({
  handleInputChange,
  handleEmptyInput,
  inputValue,
  fetchData,
}) => {
  const handleChange = (e) => {
    handleInputChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleEmptyInput(inputValue)) {
      fetchData();
    } else {
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SearchLabel htmlFor=''>github.com/</SearchLabel>
        <SearchInput
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
  );
};
