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
// import './Delete.css';

export default function DraggableDialog(props) {
  const { 
    deleteFlag,
    id,
    setDeleteFlag,
    showAllTabs
  } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async() => {
    setOpen(false);
    setDeleteFlag(false);
    await axios.delete(`http://localhost:8000/deleteTabs?_id=${id}`);
      showAllTabs();
  };

  const canceling = () => {
    setDeleteFlag(false);
  };

  useEffect(() => {
    if(deleteFlag) handleClickOpen();
  }, [deleteFlag]);

  return (
    <div>
      <Dialog
        className="all-window"
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title" className='top'>
          <span className='top-text'>
            Удалить прием
          </span>
        </DialogTitle>
        <DialogContent className='content'>
          <DialogContentText >
            <span className='text-delete'>
              Вы уверены что хотите удалить прием?
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions className='button-dil'>
          <Button onClick={() => canceling()}>
            <span className='cancel'>
              Cancel
            </span>
          </Button>
          <Button onClick={() => handleClose()}>
            <span className='del'>
              Delete
            </span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
);
}