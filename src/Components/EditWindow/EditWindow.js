import React, { useEffect, useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  TextField, 
  MenuItem
} from '@material-ui/core';
import axios from 'axios';
import './EditWindow.css';

export default function DraggableDialog({ appointment, setEditFlag, editFlag, index, zabilNazvanie }) {
  const [open, setOpen] = useState(false);
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [sick, setSick] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    let dates = date.split('-');
    dates = dates[2] + '-' + dates[1] + '-' + dates[0];
    await axios.patch('http://localhost:8000/updateTable', {
      _id: table[index]._id,
      patient,
      doctor,
      date: dates,
      sick
    })
    zabilNazvanie();
  };

  const AbortChanges = () => {
    setEditFlag(false);
  };

  return (
    <div>
      <Dialog
        className='all-window'
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
