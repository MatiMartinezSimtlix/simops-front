import React from "react";
import styled from "styled-components";

import { Button, Modal } from "@material-ui/core";
import useBoolean from "../../../hooks/useBoolean";
import { AddRounded } from "@material-ui/icons";
import SpecificationForm from "./components/SpecificationForm";

const NewSpecification = () => {
  const { isOpen, handleOpen, handleClose } = useBoolean({
    initialState: false,
  });

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        startIcon={<AddRounded />}
        fullWidth
      >
        Create Specification
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <Container>
          <SpecificationForm />
        </Container>
      </Modal>
    </>
  );
};

export default NewSpecification;

const Container = styled.div`
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-width: 400px;
  outline: none;
`;
