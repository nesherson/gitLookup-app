import React from "react";
import Styled from "styled-components";

type MainSectionProps = {
  children: JSX.Element;
};

const StyledMain = Styled.main` 
    flex: 2;
`;

function MainSection({ children }: MainSectionProps) {
  return <StyledMain>{children}</StyledMain>;
}

export default MainSection;
