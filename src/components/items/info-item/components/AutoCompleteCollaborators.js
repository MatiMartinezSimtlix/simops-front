import React from "react";
import styled from "styled-components";

import { ErrorMessage, Field } from "formik";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

const AutoCompleteCollaborators = (props) => {
  const { name, label, value, setFieldValue, options } = props;

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
        return option.collaboratorSimOpsId;
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

export default AutoCompleteCollaborators;

const CustomError = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #b31d15;
`;
