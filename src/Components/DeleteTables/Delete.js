import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';
import axios from 'axios';

export default function DraggableDialog({
  deleteFlag,
  id,
  setDeleteFlag,
  showAllTabs
}) {

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = async() => {
  await axios.delete(`http://localhost:8000/deleteTabs?_id=${id}`);
    setOpen(false);
    setDeleteFlag(false);
    showAllTabs();
};

const handleCloseCancel = () => {
  setDeleteFlag(false);
};

useEffect(() => {
if(deleteFlag) handleClickOpen();
}, [deleteFlag]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle 
          id="draggable-dialog-title" 
          className=''
        >
        <div className=''>Удалить прием</div>
        </DialogTitle>
        <DialogContent className=''>
          <DialogContentText >
            <div 
            className='text-delete'>
            Вы уверены что хотите удалить эту запись?
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className=''>
          <Button onClick={handleCloseCancel}>
            <div className=''>Cancel</div>
          </Button>
          <Button onClick={handleClose}>
            <div className=''>Delete</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
);
}