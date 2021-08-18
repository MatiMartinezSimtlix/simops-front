import React, { useEffect } from "react";
import styled from "styled-components";

import Table from "../components/collaborator/table/Table";
import Filters from "../components/collaborator/filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollaborators } from "../redux/action/collaborator.action";
import { getCollaborators } from "../querys/collaborator.query";
import FetchLoading from "../components/common/FetchLoading";

const Index = () => {
  const dispatch = useDispatch();
  const { collaborators, loading } = useSelector((state) => state.collaboratorReducer);

  useEffect(() => {
    if (!collaborators) {
      dispatch(fetchCollaborators({ query: getCollaborators }));
    }
  }, []);

  if (!collaborators || loading) {
    return <FetchLoading />;
  }

  return (
    <Container>
      <Filters />
      <Table collaborators={collaborators} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;
