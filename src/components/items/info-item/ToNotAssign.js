import React from "react";
import styled from "styled-components";

import { Form, Formik } from "formik";
import DefaultTextField from "../../common/DefaultTextField";
import WidthLoading from "../../common/WidthLoading";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../../redux/action/item.action";
import { customItemQuery } from "../../../querys/itemState.query";
import { toBrokenSchema } from "../../../utils/validations";

const ToNotAssign = ({ currentItem, mutation, handleClose }) => {
  const dispatch = useDispatch();
  const { loadingChange } = useSelector((state) => state.itemReducer);

  const initialValues = {
    comments: "",
  };

  function handleSubmit(values) {
    dispatch(
      changeState({
        query: customItemQuery({
          mutation: mutation,
          id: currentItem.id,
          comments: values.comments,
        }),
      })
    );
    handleClose();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={toBrokenSchema}
    >
      {() => (
        <Container>
          <DefaultTextField
            name="comments"
            type="text"
            label="Comments"
            multiline
            rows={4}
          />
          {loadingChange ? (
            <WidthLoading />
          ) : (
            <Button variant="contained" color="primary" type="submit">
              To Not Assign Item
            </Button>
          )}
        </Container>
      )}
    </Formik>
  );
};

export default ToNotAssign;

const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
`;
