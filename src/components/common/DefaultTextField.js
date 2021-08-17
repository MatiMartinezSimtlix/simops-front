import React from "react";
import styled from "styled-components";

import { ErrorMessage, Field } from "formik";
import { TextField } from "@material-ui/core";

const DefaultTextField = (props) => {
  const { name, type, label } = props;

  // RETURN
  return (
    <Field
      as={TextField}
      name={name}
      helperText={<ErrorMessage name={name} component={CustomError} />}
      type={type}
      label={label}
      variant="standard"
      color="primary"
      fullWidth
      {...props}
    />
  );
};

export default DefaultTextField;

const CustomError = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #b31d15;
`;
