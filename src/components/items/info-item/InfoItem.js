import React from "react";
import styled from "styled-components";

import { Modal } from "@material-ui/core";
import ToAvailable from "./ToAvailable";
import CustomAccordion from "./CustomAccordion";
import Text from "../../common/Text";

const InfoItem = ({ isOpen, handleClose, currentItem }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Container>
        <TextWrapper>
          <Text fontWeight="700" color="primary">
            Change state
          </Text>
        </TextWrapper>
        {currentItem.state === "COMING" && (
          <CustomAccordion title="Available Item">
            <ToAvailable currentItem={currentItem} />
          </CustomAccordion>
        )}
      </Container>
    </Modal>
  );
};

export default InfoItem;

const Container = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-width: 600px;
  outline: none;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  padding: 1rem;
`;
