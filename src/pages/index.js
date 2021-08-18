import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Table from "../components/collaborator/table/Table";
import Filters from "../components/collaborator/filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollaborators } from "../redux/action/collaborator.action";
import { getFullCollaborators } from "../querys/collaborator.query";
import FetchLoading from "../components/common/FetchLoading";
import Analytic from "../components/common/analytics/Analytic";

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
    let filteredCollaborators = collaborators;
    if (active) {
      filteredCollaborators = filteredCollaborators.filter((collaborator) => collaborator.active === active)
    }
    if (search) {
      filteredCollaborators = filteredCollaborators.filter(collaborator => collaborator.collaboratorSimOpsId.includes(search));
    }

    return filteredCollaborators;
  }

  useEffect(() => {
    if (!collaborators) {
      dispatch(fetchCollaborators({ query: getFullCollaborators }));
    }
  }, []);

  if (!collaborators || loading) {
    return <FetchLoading />;
  }

  function getTotals() {
    const total = collaborators.length;
    const active = collaborators.filter(collab => collab.active === true).length;
    return {
      total: total,
      active: active,
      inactive: total - active,
    }
  }

  return (
    <Container>
      <AnalyticsContainer>
        <Analytic type={"Collaborators active"} count={getTotals().active} total={getTotals().total} />
        <Analytic type={"Collaborators inactive"} count={getTotals().inactive} total={getTotals().total} />
      </AnalyticsContainer>
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

const AnalyticsContainer = styled.div`
  display: flex;
  justify: flex-end;
  flex-direction: row;
  row-gap: 1.5rem;
`;
