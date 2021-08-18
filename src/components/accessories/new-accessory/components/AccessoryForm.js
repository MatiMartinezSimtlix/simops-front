import React, { useEffect } from "react";
import styled from "styled-components";

import { Formik, Form } from "formik";
import NewSpecification from "../../../specification/new-specification/NewSpecification";
import AutoCompleteSpecification from "../../../common/AutoCompleteSpecification";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecifications } from "../../../../redux/action/specification.action";
import { getSpecificationQuery } from "../../../../querys/specification.query";
import WidthLoading from "../../../common/WidthLoading";
import { Button } from "@material-ui/core";
import DefaultAutoComplete from "../../../common/DefaultAutoComplete";
import { accessoryEnums } from "../../../../utils/enums";
import { createAccessory } from "../../../../redux/action/accessory.action";
import { createAccessoryQuery } from "../../../../querys/accessory.query";
import DefaultTextField from "../../../common/DefaultTextField";
import { accessorySchema } from "../../../../utils/validations";

const AccessoryForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { specifications, loading } = useSelector(
    (state) => state.specificationReducer
  );

  const initialValues = {
    quantity: 0,
    type: "",
    specification: {
      brand: "",
      id: "",
      model: "",
      technicalDetails: "",
    },
  };

  useEffect(() => {
    if (!specifications) {
      dispatch(fetchSpecifications({ query: getSpecificationQuery }));
    }
  }, []);

  function handleSubmit(values) {
    dispatch(
      createAccessory({
        query: createAccessoryQuery({
          quantity: values.quantity,
          specification: values.specification.id,
          type: values.type.id,
        }),
      })
    );
    handleClose();
  }

  if (!specifications || loading) {
    return null;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={accessorySchema}
    >
      {({ values, setFieldValue }) => (
        <Container>
          <RowWrapper>
            <AutoCompleteSpecification
              name="specification"
              label="Specification"
              value={values.specification}
              setFieldValue={setFieldValue}
              options={specifications}
              fullWidth
            />
            <NewSpecification />
          </RowWrapper>
          <RowWrapper>
            <DefaultAutoComplete
              name="type"
              label="Type"
              value={values.type}
              setFieldValue={setFieldValue}
              options={accessoryEnums}
              fullWidth
            />
            <DefaultTextField name="quantity" type="number" label="Quantity" />
          </RowWrapper>
          {loading ? (
            <WidthLoading />
          ) : (
            <Button variant="contained" color="primary" type="submit">
              Create Accessory
            </Button>
          )}
        </Container>
      )}
    </Formik>
  );
};

export default AccessoryForm;

const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
