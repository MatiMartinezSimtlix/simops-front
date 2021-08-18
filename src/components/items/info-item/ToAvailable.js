import React from "react";
import styled from "styled-components";

import { Form, Formik } from "formik";
import DefaultTextField from "../../common/DefaultTextField";
import WidthLoading from "../../common/WidthLoading";
import { Button } from "@material-ui/core";
import { toAvailableSchema } from "../../../utils/validations";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../../redux/action/item.action";
import { customItemQuery } from "../../../querys/itemState.query";

const ToAvailable = ({ currentItem, mutation, handleClose }) => {
  const dispatch = useDispatch();
  const { loadingChange } = useSelector((state) => state.itemReducer);

  const initialValues = {
    simtlixCode: "",
    serialNumber: "",
    purchaseDate: "",
  };

  function handleSubmit(values) {
    if (mutation === "COMING_to_AVAILABLE_item") {
      dispatch(
        changeState({
          query: customItemQuery({
            mutation: mutation,
            id: currentItem.id,
            simtlixCode: values.simtlixCode,
            serialNumber: values.serialNumber,
            purchaseDate: values.purchaseDate,
          }),
        })
      );
    } else {
      dispatch(
        changeState({
          query: customItemQuery({
            mutation: mutation,
            id: currentItem.id,
          }),
        })
      );
    }
    handleClose();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={
        mutation === "COMING_to_AVAILABLE_item" && toAvailableSchema
      }
    >
      {() => (
        <Container>
          {mutation === "COMING_to_AVAILABLE_item" && (
            <>
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
            </>
          )}
          {loadingChange ? (
            <WidthLoading />
          ) : (
            <Button variant="contained" color="primary" type="submit">
              To Available Item
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
