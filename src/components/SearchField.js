import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 7px;
  font-size: 1.02rem;
  border: 1px solid #f2f2f2;
  width: 350px;
  &:focus {
    outline: none;
    border-color: red;
  }
`;

const SearchButton = styled.button`
  font-size: 1.02rem;
  padding: 8px 25px;
  border: 1px solid #f2f2f2;
`;

const SearchLabel = styled.label`
  padding: 7px;
`;

export const SearchField = ({ handleInputChange, inputValue }) => {
  const handleChange = (e) => {
    handleInputChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
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
