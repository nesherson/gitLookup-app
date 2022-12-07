import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Styled from 'styled-components';

import { getSearchQuery } from 'src/util/helpers';

import TextInput from '../text-input/TextInput';

const StyledButton = Styled.button<{ primary?: boolean }>`
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

interface Props {
  primary?: boolean;
  searchQuery?: string;
}

function Search({ primary }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const searchQuery = getSearchQuery(location.pathname);

  const [searchInput, setSearchInput] = useState(searchQuery);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

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
      <div>
        <form onSubmit={handleOnSubmit}>
          <TextInput
            primary={primary}
            searchInput={searchInput}
            onChange={handleOnChange}
          />
          <StyledButton primary={primary} type='submit'>
            Search
          </StyledButton>
        </form>
        {isInputEmpty && emptyInputWarning}
      </div>
  );
};

export default Search;
