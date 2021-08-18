import React from "react";
import styled from "styled-components";

import { CircularProgress } from "@material-ui/core";

const WidthLoading = () => {
  return (
    <Container>
      <CircularProgress color="primary" />
    </Container>
  );
};

export default WidthLoading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
