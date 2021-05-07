import React, { useState } from 'react';
import axios from 'axios';
import { TextField, MenuItem } from '@material-ui/core';
import Alert from '../Alert/Alert';
import './BodyMaket.css';

function BodyMaket({ showAllTabs, setFlagChange }) {
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [sick, setSick] = useState('');
  const [check, setCheck] = useState(false);
  const [text, setText] = useState('');
  const [alertStyle, setAlertStyle] = useState('');
  const allDoc = [
    "Надолинский Дмитрий Алексеевич",
    "Мухин Дмитрий Борисович",
    "Борисов Денис Андреевич",
    "Викторов Виктор Ашотович",
    "Грузинов Чечен Нетолеранстович",
    "Горбатова Собака Сутуловна",
  ];
<<<<<<< HEAD
	let dateNew = date.split('-');
	dateNew = dateNew[1] + '-' + dateNew[2] + '-' + dateNew[0];

=======
>>>>>>> 18edc6606c0aca405dee66372b075a10f0a76abf
	const errorMessage = (textError) => {
    setAlertStyle('error');
    setCheck(true);
    setText(textError);
  };
  
  const addNewTab = async () => {
   if(!sick || !date || !doctor || !patient) {
		return errorMessage("Все поля должны быть заполнены");
	 }
    try{
			await axios.post('http://localhost:8000/createTabs', {
        patient,
        doctor,
        date: date,
        sick,
      }).then(res => {
          setPatient('');
          setDoctor('');
          setDate('');
					setSick('');
					errorMessage("Таблица создана успешно");
			})	
		} catch (e) {
			errorMessage("Что-то пошло не так на сервере");
    }
    showAllTabs();
  }

  return (
    <div>
      <div className="maket-tables">
        <div className="maket-patient">
          <span className="span-tables">
            Имя:
          </span>
          <TextField
            className="input-tabs-patient"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
            variant="outlined"
          />
        </div>
        <div className="maket-doctor">
          <span className="span-tables">
            Врач:
          </span>
          <TextField
            className="doctorInput"
            select
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
        <div className="maket-date">
          <span className="span-tables">
            Дата:
          </span>
          <TextField 
            className="input-tabs-patient" 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            variant="outlined"
          />
        </div>
        <div className="maket-sick">
          <span className="span-tables">
            Жалобы:
          </span>
          <TextField 
            className="input-tabs-patient" 
            value={sick}
            onChange={(e) => setSick(e.target.value)}
            variant="outlined"
          />
        </div>
        <button 
          className="add-tab"
          onClick={(e) => addNewTab()}
        >
          Добавить
        </button>
      </div>
				<Alert
					text={text}
					state={check}
					setCheck={setCheck}
					alertStyle={alertStyle}
				/>
    </div>
  );
}
export default BodyMaket;