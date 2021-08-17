import React, { useEffect } from "react";
import styled from "styled-components";

import { IconButton, Modal } from "@material-ui/core";
import useBoolean from "../../../hooks/useBoolean";
import { AddRounded } from "@material-ui/icons";
import NewSpecification from "../../specification/new-specification/NewSpecification";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecifications } from "../../../redux/action/specification.action";
import { getSpecification } from "../../../querys/specification.query";

const NewItem = () => {
  const { isOpen, handleOpen, handleClose } = useBoolean({
    initialState: false,
  });

  const dispatch = useDispatch();
  const { specifications, loading } = useSelector(
    (state) => state.specificationReducer
  );

  useEffect(() => {
    if (!specifications) {
      dispatch(fetchSpecifications({ query: getSpecification }));
    }
  }, []);

  return (
    <>
      <CustomIconButton onClick={handleOpen}>
        <AddRounded />
      </CustomIconButton>
      <Modal open={isOpen} onClose={handleClose}>
        <Container>
          <RowWrapper>
            <NewSpecification />
          </RowWrapper>
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
  outline: none;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;
