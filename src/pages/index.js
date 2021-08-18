import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Table from "../components/collaborator/table/Table";
import Filters from "../components/collaborator/filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollaborators } from "../redux/action/collaborator.action";
import { getFullCollaborators } from "../querys/collaborator.query";
import FetchLoading from "../components/common/FetchLoading";

const Index = () => {
  const dispatch = useDispatch();
  const { collaborators, loading } = useSelector((state) => state.collaboratorReducer);
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  function handleChangeActive(e) {
    setActive(e.target.value);
  }

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function filterItems() {
    if (active === null) {
      return collaborators;
    }
    return collaborators.filter((collaborator) => collaborator.active === active);
  }

  useEffect(() => {
    if (!collaborators) {
      dispatch(fetchCollaborators({ query: getFullCollaborators }));
    }
  }, []);

  if (!collaborators || loading) {
    return <FetchLoading />;
  }

  return (
    <Container>
      <Filters
        active={active}
        handleChangeActive={handleChangeActive}
        search={search}
        handleChangeSearch={handleChangeSearch}
      />
      <Table collaborators={filterItems()} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;
