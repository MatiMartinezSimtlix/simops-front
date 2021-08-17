import React from "react";
import styled from "styled-components";
import useBoolean from "../../hooks/useBoolean";

import Aside from "../aside/Aside";
import Navegation from "../navegation/Navegation";

const Layout = ({ children }) => {
  const { isOpen, handleToggle } = useBoolean({ initialState: true });

  return (
    <>
      <Navegation handleToggle={handleToggle} />
      <Aside isOpen={isOpen} />
      <Container $isOpen={isOpen}>{children}</Container>
    </>
  );
};

export default Layout;

const Container = styled.main`
  position: relative;
  padding: calc(1.5rem + 70px) 1.5rem 1.5rem;
  padding-left: ${(p) =>
    p.$isOpen ? "calc(200px + 1.5rem)" : "calc(70px + 1.5rem)"};
  transition: all 0.2s;
`;
