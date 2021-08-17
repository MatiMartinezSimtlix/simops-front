import React, { useEffect } from "react";
import styled from "styled-components";

import { Formik, Form } from "formik";
import NewSpecification from "../../../specification/new-specification/NewSpecification";
import AutoCompleteSpecification from "./AutoCompleteSpecification";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecifications } from "../../../../redux/action/specification.action";
import { getSpecificationQuery } from "../../../../querys/specification.query";
import WidthLoading from "../../../common/WidthLoading";
import { Button } from "@material-ui/core";
import DefaultAutoComplete from "../../../common/DefaultAutoComplete";
import { itemEnums } from "../../../../utils/enums";
import { createItem } from "../../../../redux/action/item.action";
import { createItemQuery } from "../../../../querys/item.query";

const ItemForm = () => {
  const dispatch = useDispatch();
  const { specifications, loading } = useSelector(
    (state) => state.specificationReducer
  );

  const initialValues = {
    specification: {
      brand: "",
      id: "",
      model: "",
      technicalDetails: "",
    },
    type: "",
  };

  useEffect(() => {
    if (!specifications) {
      dispatch(fetchSpecifications({ query: getSpecificationQuery }));
    }
  }, []);

  function handleSubmit(values) {
    console.log(values);
    dispatch(
      createItem({
        query: createItemQuery({
          specification: values.specification.id,
          type: values.type.id,
        }),
      })
    );
  }

  if (!specifications || loading) {
    return null;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
          <DefaultAutoComplete
            name="type"
            label="Type"
            value={values.type}
            setFieldValue={setFieldValue}
            options={itemEnums}
          />
          {loading ? (
            <WidthLoading />
          ) : (
            <Button variant="contained" color="primary" type="submit">
              Create Item
            </Button>
          )}
        </Container>
      )}
    </Formik>
  );
};

export default ItemForm;

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
