import React from "react";
import styled from "styled-components";

import { Form, Formik } from "formik";
import DefaultTextField from "../../common/DefaultTextField";
import WidthLoading from "../../common/WidthLoading";
import { Button } from "@material-ui/core";
import { assignSchema } from "../../../utils/validations";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../../redux/action/item.action";
import { customItemQuery } from "../../../querys/itemState.query";

const ToAvailable = ({ currentItem }) => {
  const dispatch = useDispatch();
  const { loadingChange } = useSelector((state) => state.itemReducer);

  const initialValues = {
    simtlixCode: "",
    serialNumber: "",
    purchaseDate: "",
  };

  function handleSubmit(values) {
    dispatch(
      changeState({
        query: customItemQuery({
          mutation: "COMING_to_AVAILABLE_item",
          id: currentItem.id,
          simtlixCode: values.simtlixCode,
          serialNumber: values.serialNumber,
          purchaseDate: values.purchaseDate,
        }),
      })
    );
    console.log(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={assignSchema}
    >
      {() => (
        <Container>
          <DefaultTextField
            name="simtlixCode"
            type="text"
            label="simTLiXCode"
          />
          <DefaultTextField
            name="serialNumber"
            type="text"
            label="SerialNumber"
          />
          <DefaultTextField
            name="purchaseDate"
            type="text"
            label="PurchaseDate (YYYY/MM/DD)"
          />
          {loadingChange ? (
            <WidthLoading />
          ) : (
            <Button variant="contained" color="primary" type="submit">
              Assign Item
            </Button>
          )}
        </Container>
      )}
    </Formik>
  );
};

export default ToAvailable;

const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
`;
