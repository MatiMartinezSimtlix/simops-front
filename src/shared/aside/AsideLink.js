import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "../../components/common/Text";

const AsideLink = ({ label, icon, to, isOpen }) => {
  return (
    <Container to={to} $isOpen={isOpen}>
      {icon}
      {isOpen && <Text>{label}</Text>}
    </Container>
  );
};

export default AsideLink;

const Container = styled(Link)`
  display: flex;
  justify-content: ${(p) => (p.$isOpen ? "flex-start" : "center")};
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem;
  border-radius: 4px;

  :hover {
    background-color: #eeeeee;
  }
`;
