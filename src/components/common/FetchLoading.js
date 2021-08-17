import React from "react";
import styled from "styled-components";

import { CircularProgress } from "@material-ui/core";

const FetchLoading = () => {
  return (
    <Container>
      <CircularProgress color="primary" size={64} />
    </Container>
  );
};

export default FetchLoading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25vh 0;
`;
