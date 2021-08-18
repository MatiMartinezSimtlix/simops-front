import React from "react";
import styled from "styled-components";

import { IconButton, Modal } from "@material-ui/core";
import useBoolean from "../../../hooks/useBoolean";
import { AddRounded } from "@material-ui/icons";
import ItemForm from "./components/ItemForm";

const NewItem = () => {
  const { isOpen, handleOpen, handleClose } = useBoolean({
    initialState: false,
  });

  return (
    <>
      <CustomIconButton onClick={handleOpen}>
        <AddRounded />
      </CustomIconButton>
      <Modal open={isOpen} onClose={handleClose}>
        <Container>
          <ItemForm />
        </Container>
      </Modal>
    </>
  );
};

export default NewItem;

const CustomIconButton = styled(IconButton)`
  background-color: #f16431;
  color: #ffffff;

  :hover {
    background-color: rgb(168, 70, 34);
  }
`;

const Container = styled.div`
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-width: 600px;
  outline: none;
`;
