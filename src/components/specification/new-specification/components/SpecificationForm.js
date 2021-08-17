import React from "react";
import styled from "styled-components";

import { Formik, Form } from "formik";
import DefaultTextField from "../../../common/DefaultTextField";
import { Button } from "@material-ui/core";
import { specificationSchema } from "../../../../utils/validations";
import { createSpecification } from "../../../../redux/action/specification.action";
import { useDispatch, useSelector } from "react-redux";
import { createSpecificationQuery } from "../../../../querys/specification.query";
import WidthLoading from "../../../common/WidthLoading";

const SpecificationForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.specificationReducer);

  const initialValues = {
    brand: "",
    model: "",
    technicalDetails: "",
  };

  function handleSubmit(values) {
    dispatch(createSpecification({ query: createSpecificationQuery(values) }));
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
          {loading ? (
            <WidthLoading />
          ) : (
            <Button variant="contained" color="primary" type="submit">
              Create Specification
            </Button>
          )}
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
