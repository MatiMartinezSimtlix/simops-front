import { Modal, Typography } from '@material-ui/core'
import React  from 'react';
import styled from 'styled-components';
import Table from '../../collaborator/table/Table';

const Info = ({ isOpen, handleClose, accessory }) => {
  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Container>
          <Title>Collaborators</Title>
          <Table collaborators={accessory?.collaborators.map(relation => relation.collaborator)} />
        </Container>
      </Modal>
    </>
  )
}

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
max-height: 700px;
overflow: scroll;
`;

const Title = styled.span`
font-size: 16px;
font-weight: 700;
line-height: 2;
`;

export default Info;
