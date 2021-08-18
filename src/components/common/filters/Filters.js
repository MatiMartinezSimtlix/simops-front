import React, { useState } from "react";
import styled from "styled-components";

import SelectField from "./components/SelectField";
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
      <SelectField
        label="Model"
        value={selectValues.model}
        onChange={handleChange}
        name="model"
      />
      <Divider orientation="vertical" flexItem />
      <SelectField
        label="Brand"
        value={selectValues.brand}
        onChange={handleChange}
        name="brand"
      />
      <Divider orientation="vertical" flexItem />
      <SelectField
        label="Type"
        value={selectValues.type}
        onChange={handleChange}
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
