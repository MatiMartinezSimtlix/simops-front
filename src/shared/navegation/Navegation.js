import React from "react";
import styled from "styled-components";

import { MenuRounded } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Navegation = ({ handleToggle }) => {
  return (
    <Container>
      <IconButton onClick={handleToggle}>
        <MenuRounded htmlColor="#ffffff" />
      </IconButton>
    </Container>
  );
};

export default Navegation;

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 70px;
  background-color: #F16431;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
