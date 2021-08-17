import React, { useState } from "react";
import styled from "styled-components";

import CollaboratorSelect from "./components/CollaboratorSelect";
import { Divider } from "@material-ui/core";
import SearchWithIcon from "../../common/SearchWithIcon";

function Filters() {
  const [selectValues, setSelectValues] = useState({
    type: "",
    model: "",
    brand: "",
  });
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSelectValues({
      ...selectValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <Container>
      <SearchWithIcon value={search} onChange={handleChangeSearch} />
      <CollaboratorSelect
        label="Active"
        value={selectValues.active}
        onChange={handleChange}
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
