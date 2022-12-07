import React from "react";
import Styled from "styled-components";

import { Logo } from "src/components";
import { Search } from "src/components";

const Container = Styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

function SearchPage() {
  return (
    <Container>
      <Logo primary />
      <Search primary />
    </Container>
  );
}

export default SearchPage;
