import { Modal } from '@material-ui/core'
import React  from 'react';
import styled from 'styled-components';
import { default as ItemsTable } from '../../items/table/Table';
import { default as AccessoriesTable } from '../../accessories/table/Table';

const Info = ({ isOpen, handleClose, collaborator }) => {

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Container>
          Items
          <ItemsTable items={collaborator?.collaboratorItems} />
          Accessories
          <AccessoriesTable accessories={collaborator?.collaboratorAccessories.map(relation => relation.accessory)} />
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

export default Info;
