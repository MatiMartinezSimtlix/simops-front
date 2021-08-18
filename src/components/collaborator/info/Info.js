import { Modal } from '@material-ui/core'
import React, { useState }  from 'react';
import styled from 'styled-components';
import Table from '../../items/table/Table';

const Info = ({ isOpen, handleClose, collaborator }) => {
  const [showItems, setShowItems] = useState(true);

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Container>
          <Table items={collaborator.collaboratorItems} />
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
`;

export default Info
