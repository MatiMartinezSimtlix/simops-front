import React from "react";
import styled from "styled-components";

import { Form, Formik } from "formik";
import WidthLoading from "../../common/WidthLoading";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../../redux/action/item.action";
import { customItemQuery } from "../../../querys/itemState.query";

const ToBooked = ({ currentItem, handleClose }) => {
  const dispatch = useDispatch();
  const { loadingChange } = useSelector((state) => state.itemReducer);

  const initialValues = {};

  function handleSubmit(values) {
    dispatch(
      changeState({
        query: customItemQuery({
          mutation: "AVAILABLE_to_BOOKED_item",
          id: currentItem.id,
        }),
      })
    );
    handleClose();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Container>
          {loadingChange ? (
            <WidthLoading />
          ) : (
            <Button variant="contained" color="primary" type="submit">
              To Booked Item
            </Button>
          )}
        </Container>
      )}
    </Formik>
  );
};

export default ToBooked;

const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
`;
