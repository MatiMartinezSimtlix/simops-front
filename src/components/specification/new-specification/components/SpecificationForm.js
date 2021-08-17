import React from "react";
import styled from "styled-components";

import { Formik, Form } from "formik";
import DefaultTextField from "../../../common/DefaultTextField";
import { Button } from "@material-ui/core";
import { specificationSchema } from "../../../../utils/validations";

const SpecificationForm = () => {
  const initialValues = {
    brand: "",
    model: "",
    technicalDetails: "",
  };

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={specificationSchema}
    >
      {() => (
        <Container>
          <DefaultTextField name="brand" type="text" label="Brand" />
          <DefaultTextField name="model" type="text" label="Model" />
          <DefaultTextField
            name="technicalDetails"
            type="text"
            label="Technical Details"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" type="submit">
            Create Specification
          </Button>
        </Container>
      )}
    </Formik>
  );
};

export default SpecificationForm;

const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
