import { useState } from "react";
import ItemSelect from "./components/ItemSelect";
import styled from "styled-components";
import { Divider } from "@material-ui/core";

function Filters() {
  const [selectValues, setSelectValues] = useState({
    type: "",
    model: "",
    brand: "",
  });
  function handleChange(event) {
    setSelectValues({
      ...selectValues,
      [event.target.name]: event.target.value,
    });
  }

  console.log(selectValues);

  return (
    <SelectContainer>
      <ItemSelect
        label="Type"
        value={selectValues.type}
        onChange={handleChange}
        name="type"
      />
      <Divider orientation="vertical" flexItem />
      <ItemSelect
        label="Brand"
        value={selectValues.brand}
        onChange={handleChange}
        name="brand"
      />
      <Divider orientation="vertical" flexItem />
      <ItemSelect
        label="Model"
        value={selectValues.model}
        onChange={handleChange}
        name="model"
      />
    </SelectContainer>
  );
}

export default Filters;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
`;
