import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';

import { InputField } from '../InputField/InputField';

const SearchButton = Styled.button<{primary: boolean}>`
  font-size: 1rem;
  letter-spacing: 1px;
  padding: ${(props) => (props.primary ? '8px 30px' : '8px 15px')};
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
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

const checkSearchedInput = (searchedInput: string) => {
  return typeof searchedInput === 'undefined' ? '' : searchedInput;
};

interface Props {
  primary: boolean,
  searchedInput: string
}

export const SearchField:React.FC<Props> = ({ primary, searchedInput }) => {
  const [searchInput, setSearchInput] = useState(
    checkSearchedInput(searchedInput)
  );
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchInput) {
      setIsInputEmpty(false);
      navigate(`/${searchInput}`);
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
