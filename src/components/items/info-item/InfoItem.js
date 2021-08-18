import React from "react";
import styled from "styled-components";

import { Modal } from "@material-ui/core";
import ToAvailable from "./ToAvailable";
import CustomAccordion from "./components/CustomAccordion";
import Text from "../../common/Text";
import ToBroken from "./ToBroken";
import ToBooked from "./ToBooked";
import ToAssign from "./ToAssign";
import ToNotAssign from "./ToNotAssign";

const InfoItem = ({ isOpen, handleClose, currentItem }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Container>
        <TextWrapper>
          <Text fontWeight="700" color="primary">
            Change state
          </Text>
        </TextWrapper>
        {/** COMING */}
        {currentItem.state === "COMING" && (
          <CustomAccordion title="To Available Item">
            <ToAvailable
              currentItem={currentItem}
              mutation="COMING_to_AVAILABLE_item"
              handleClose={handleClose}
            />
          </CustomAccordion>
        )}
        {/** AVAILABLE */}
        {currentItem.state === "AVAILABLE" && (
          <>
            <CustomAccordion title="To Broken Item">
              <ToBroken
                currentItem={currentItem}
                mutation="AVAILABLE_to_BROKEN_item"
                handleClose={handleClose}
              />
            </CustomAccordion>
            <CustomAccordion title="To Booked Item">
              <ToBooked currentItem={currentItem} handleClose={handleClose} />
            </CustomAccordion>
            <CustomAccordion title="To Assigned Item">
              <ToAssign
                currentItem={currentItem}
                mutation="AVAILABLE_to_ASSIGNED_item"
                handleClose={handleClose}
              />
            </CustomAccordion>
            <CustomAccordion title="To Not Assign Item">
              <ToNotAssign
                currentItem={currentItem}
                mutation="AVAILABLE_to_NOT_ASSIGNABLE_item"
                handleClose={handleClose}
              />
            </CustomAccordion>
          </>
        )}
        {/** ASSIGNED */}
        {currentItem.state === "ASSIGNED" && (
          <>
            <CustomAccordion title="To Broken Item">
              <ToBroken
                currentItem={currentItem}
                mutation="ASSIGNED_to_BROKEN_item"
                handleClose={handleClose}
              />
            </CustomAccordion>
            <CustomAccordion title="To Available Item">
              <ToAvailable
                currentItem={currentItem}
                mutation="ASSIGNED_to_AVAILABLE_item"
                handleClose={handleClose}
              />
            </CustomAccordion>
          </>
        )}
        {/** BOOKED */}
        {currentItem.state === "BOOKED" && (
          <>
            <CustomAccordion title="To Assigned Item">
              <ToAssign
                currentItem={currentItem}
                mutation="BOOKED_to_ASSIGNED_item"
                handleClose={handleClose}
              />
            </CustomAccordion>
          </>
        )}
        {/** BROKEN */}
        {currentItem.state === "BROKEN" && (
          <>
            <CustomAccordion title="To Available Item">
              <ToAvailable
                currentItem={currentItem}
                mutation="BROKEN_to_AVAILABLE_item"
                handleClose={handleClose}
              />
            </CustomAccordion>
            <CustomAccordion title="To Not Assign Item">
              <ToNotAssign
                currentItem={currentItem}
                mutation="BROKEN_to_NOT_ASSIGNABLE_item"
                handleClose={handleClose}
              />
            </CustomAccordion>
          </>
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
