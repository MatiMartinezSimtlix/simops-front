import React from "react";
import styled from "styled-components";
import useBoolean from "../../hooks/useBoolean";

import Aside from "../aside/Aside";
import Navegation from "../navegation/Navegation";

const Layout = ({ children }) => {
  const { isOpen, handleToggle } = useBoolean();

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
  left: ${(p) => (p.$isOpen ? "200px" : "70px")};
  top: 70px;
  padding: 1rem;
  width: 100%;

  transition: all 1s;
`;
