import React from 'react';
import styled from "styled-components";
import { Card, CardContent } from '@material-ui/core';
import Text from "../../common/Text";
export default function Analytic({ type, count, total }) {
  return (
    <Container>
      <Card>
        <CardContent>
          <Text color="primary" fontWeight="bold">
          {type}
          </Text>
          <Text color="black" fontWeight="regular">
          {`${count}/${total}`}
          </Text>
        </CardContent>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;
