import React from "react";
import styled from "styled-components";

import AsideLink from "./AsideLink";
import {
  ComputerRounded,
  HeadsetMicRounded,
  PersonRounded,
} from "@material-ui/icons";

const Aside = ({ isOpen }) => {
  return (
    <Container $isOpen={isOpen}>
      <Logo
        src={isOpen ? "/SimOps-logo.svg" : "/SimOps-logo-min.svg"}
        alt="SimOps"
      />
      <LinksContainer>
        <AsideLink
          label="Collaborator"
          icon={<PersonRounded />}
          to="/"
          isOpen={isOpen}
        />
        <AsideLink
          label="Items"
          icon={<ComputerRounded />}
          to="/items"
          isOpen={isOpen}
        />
        <AsideLink
          label="Accessories"
          icon={<HeadsetMicRounded />}
          to="/accessories"
          isOpen={isOpen}
        />
      </LinksContainer>
    </Container>
  );
};

export default Aside;

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem 0.5rem;
  width: ${(p) => (p.$isOpen ? "200px" : "70px")};
  height: 100%;
  position: fixed;
  top: 70px;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  transition: all 0.2s;
  z-index: 99;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
