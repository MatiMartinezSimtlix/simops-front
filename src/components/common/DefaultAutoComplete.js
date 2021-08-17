import React from "react";
import styled from "styled-components";

import { ErrorMessage, Field } from "formik";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

const DefaultAutoComplete = (props) => {
  const { name, label, value, setFieldValue, options } = props;

  // RETURN
  return (
    <Field
      as={Autocomplete}
      name={name}
      value={value}
      onChange={(e, newValue) => {
        if (newValue !== null) {
          setFieldValue(name, newValue);
        }
      }}
      options={options}
      getOptionLabel={(option) => {
        return option.id;
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          helperText={<ErrorMessage name={name} component={CustomError} />}
        />
      )}
      {...props}
    />
  );
};

export default DefaultAutoComplete;

const CustomError = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #b31d15;
`;
