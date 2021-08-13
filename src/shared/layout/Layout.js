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
      <Aside />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

const Container = styled.main`
  padding-left: 200px;
  padding-top: 70px;
  width: 100%;
`;
