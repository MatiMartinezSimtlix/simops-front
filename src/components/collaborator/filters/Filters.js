import React from "react";
import styled from "styled-components";

import CollaboratorSelect from "./components/CollaboratorSelect";
import { Divider } from "@material-ui/core";
import SearchWithIcon from "../../common/SearchWithIcon";

function Filters({active, handleChangeActive, search, handleChangeSearch}) {
  return (
    <Container>
      <SearchWithIcon value={search} onChange={handleChangeSearch} />
      <CollaboratorSelect
        label="Active"
        value={active}
        onChange={handleChangeActive}
        name="active"
      />
      <Divider orientation="vertical" flexItem />
    </Container>
  );
}

export default Filters;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  column-gap: 1.5rem;
`;
