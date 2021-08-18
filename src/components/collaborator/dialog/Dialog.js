import { Dialog, Typography, MuiDialogTitle, MuiDialogContent, MuiDialogActions } from '@material-ui/core';
import { useState } from 'react';

import Table from "../components/items/table/Table";

const DialogTitle = (props) => {

  return (
    <MuiDialogTitle disableTypography>
      <Typography variant="h6">
        {props.children}
      </Typography>
    </MuiDialogTitle>
  );
};

const DialogContent = (MuiDialogContent);
const DialogActions = (MuiDialogActions);

export default function CustomizedDialogs({collaborator, handleOpen, handleClose, open}) {

  return(
    <Dialog>
      <DialogTitle onClose={handleClose} open={open}>
        Items
      </DialogTitle>
      <DialogContent>
        <Table items={collaborator.collaboratorItems} />
      </DialogContent>
      <DialogActions>

      </DialogActions>
    </Dialog>
  )  
}