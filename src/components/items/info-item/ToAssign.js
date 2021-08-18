import React, { useEffect } from "react";
import styled from "styled-components";

import { Form, Formik } from "formik";
import DefaultTextField from "../../common/DefaultTextField";
import WidthLoading from "../../common/WidthLoading";
import { Button } from "@material-ui/core";
import { toAssignedSchema } from "../../../utils/validations";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../../redux/action/item.action";
import { customItemQuery } from "../../../querys/itemState.query";
import { fetchCollaborators } from "../../../redux/action/collaborator.action";
import { getCollaborators } from "../../../querys/collaborator.query";
import AutoCompleteCollaborators from "./components/AutoCompleteCollaborators";

const ToAssign = ({ currentItem, handleClose }) => {
  const dispatch = useDispatch();
  const { loadingChange } = useSelector((state) => state.itemReducer);
  const { collaborators, loading } = useSelector(
    (state) => state.collaboratorReducer
  );

  const initialValues = {
    assignedCollaboratorId: "",
    requestedDate: "",
  };

  useEffect(() => {
    if (!collaborators) {
      dispatch(fetchCollaborators({ query: getCollaborators }));
    }
  }, []);

  function handleSubmit(values) {
    dispatch(
      changeState({
        query: customItemQuery({
          mutation: "AVAILABLE_to_ASSIGNED_item",
          id: currentItem.id,
          assignedCollaboratorId: values.assignedCollaboratorId.id,
          requestedDate: values.requestedDate,
        }),
      })
    );
    console.log(values);
  }

  if (!collaborators || loading) {
    return <WidthLoading />;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={toAssignedSchema}
    >
      {({ values, setFieldValue }) => (
        <Container>
          <AutoCompleteCollaborators
            name="assignedCollaboratorId"
            label="Collaborator"
            value={values.assignedCollaboratorId}
            setFieldValue={setFieldValue}
            options={collaborators}
          />
          <DefaultTextField
            name="requestedDate"
            type="text"
            label="requestedDate (YYYY/MM/DD)"
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

export default ToAssign;

const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
`;
