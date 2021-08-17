import React from "react";
import styled from "styled-components";

import { TextField } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";

const SearchWithIcon = ({ value, onChange }) => {
  return (
    <CustomTextField
      variant="outlined"
      InputProps={{
        startAdornment: <SearchRounded color="secondary" />,
      }}
      value={value}
      onChange={onChange}
      placeholder="Search"
    />
  );
};

export default SearchWithIcon;

const CustomTextField = styled(TextField)`
  div {
    column-gap: 0.5rem;
  }
`;
