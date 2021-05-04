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

export default function DraggableDialog(props) {
  const {
    appointment,
    setEditFlag,
    editFlag,
    index,
    showAllTabs
  } = props; 
  const [open, setOpen] = useState(false);
  const [patient, setPatient] = useState(`${appointment[index].patient}`);
  const [doctor, setDoctor] = useState(`${appointment[index].doctor}`);
  const [date, setDate] = useState(`${appointment[index].date}`);
  const [sick, setSick] = useState(`${appointment[index].sick} `);
  const allDoc = [
    "Надолинский Дмитрий Алексеевич",
    "Мухин Дмитрий Борисович",
    "Борисов Денис Андреевич",
    "Викторов Виктор Ашотович",
    "Грузинов Чечен Нетолеранстович",
    "Горбатова Собака Сутуловна",
  ];

  useEffect(() => {
    if(editFlag) handleClickOpen();
  }, [editFlag]);

  const handleClickOpen = () => {
    setOpen(true);
    let dateNew = date.split('-');
	  dateNew = dateNew[2] + '-' + dateNew[1] + '-' + dateNew[0];
    setDate(dateNew);
  };
  
  const handleClose = async() => {
    setOpen(false);
    let dateNew = date.split('-');
    dateNew = dateNew[2] + '-' + dateNew[1] + '-' + dateNew[0];
    setEditFlag(false);
    await axios.patch('http://localhost:8000/patchTabs', {
      _id: appointment[index]._id,
      patient,
      doctor,
      date: dateNew,
      sick
      });
    showAllTabs();
  };

  const AbortChanges = () => {
    setOpen(false);
    setEditFlag(false);
  };

  return (
    <div>
      <Dialog
        className='all-window'
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle 
          className="title-style"
          id="draggable-dialog-title"
        >
          <div className='top-text'>
            Изменить прием
          </div>
        </DialogTitle>
        <DialogContent className="all-content">
          <div className='content'>
            <span className='span-style'>
              Имя:
            </span>
              <TextField 
                type='text' 
                className='input-name-2' 
                value={patient} 
                key={`${appointment[index].patient}`}
                onChange={(e) => setPatient(e.target.value)}
                variant="outlined"
              />
          </div>
          <div className='content'>
            <span className='span-style'>
              Врач:
            </span>
              <TextField
                className="input-name-doc"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                variant="outlined"
              >
                {allDoc.map((value) => (
                  <MenuItem 
                    key={value}
                    value={value}
                  >
                    {value}
                  </MenuItem>
                ))}
              </TextField>
          </div>
          <div className='content'>
            <span className='span-style'>
              Дата:
            </span>
              <TextField 
                type='date'
                className='input-name-2' 
                value={date} 
                key={`${appointment[index].date}`}
                onChange={(e) => setDate(e.target.value)}
                variant="outlined"
              />
          </div>
          <div className='content'>
            <span className='span-style'>
              Жалобы:
            </span>
              <TextField 
                className='input-name-3' 
                type='text' 
                value={sick} 
                key={`${appointment[index].sick}`}
                onChange={(e) => setSick(e.target.value)}
                variant="outlined"
              />
          </div>
        </DialogContent>
        <DialogActions className="button-dialog">
          <Button 
            autoFocus
            onClick={() => AbortChanges()}
            color="primary"
          >
            <div className='cancel'>
              Cancel
            </div>
          </Button>
          <Button 
            onClick= {() => handleClose()}
            color="primary"
          >
            <div className='del'>
              Save
            </div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
