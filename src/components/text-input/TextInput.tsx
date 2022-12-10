import React from "react";
import Styled from "styled-components";

const StyledInput = Styled.input<{ primary?: boolean }>`
  padding: 7px;
  font-size: 1.02rem;
  border: 1px solid #d9d9d9;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  width: ${(props) => (props.primary ? "350px" : "")};
  min-width: ${(props) => (props.primary ? "280px" : "")};
  &:focus {
    outline: none;
    border-color: #705df2;
  }
`;

const InputLabel = Styled.label`
  padding: 7px;
  @media (max-width: 768px) {
    display: none;
  }
`;

type TextInputProps = {
  primary?: boolean;
  searchInput: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ primary, searchInput, onChange }: TextInputProps) {
  return (
    <>
      {primary ? <InputLabel htmlFor="username">github.com/</InputLabel> : null}
      <StyledInput
        primary={primary}
        type="text"
        id="username"
        name="username"
        value={searchInput}
        onChange={onChange}
        placeholder="Enter Username"
      />
    </>
  );
}

export default TextInput;
