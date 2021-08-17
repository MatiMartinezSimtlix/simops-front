import React, { useState } from "react";
import styled from "styled-components";

import TypeSelect from "./components/TypeSelect";
import { Divider } from "@material-ui/core";
import SearchWithIcon from "../../common/SearchWithIcon";

import NewItem from "../new-item/NewItem";

function Filters({ type, handleChangeType, search, handleChangeSearch }) {
  return (
    <Container>
      <NewItem />
      <SearchWithIcon value={search} onChange={handleChangeSearch} />
      <Divider orientation="vertical" flexItem />
      <TypeSelect
        label="Type"
        value={type}
        onChange={handleChangeType}
        name="type"
      />
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
