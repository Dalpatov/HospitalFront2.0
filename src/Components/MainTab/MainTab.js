import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderAll from '../HeaderAll/HeaderAll';
import BodyMaket from '../BodyMaket/BodyMaket';
import TablesAppointment from '../TablesAppointment/TablesAppointment';

function MainTab() {
  const [appointment, setAppointment] = useState([]);
  const [flagChange, setFlagChange] = useState(false);

  useEffect(() => showAllTabs(), []);

  const showAllTabs = async () =>{
    await axios.get('http://localhost:8000/allTabs').then(res => {
      setAppointment(res.data.data);
    });
  }

  return (
    <div>
      <HeaderAll name="Приемы"/>
        <BodyMaket
          showAllTabs={showAllTabs}
          setFlagChange={setFlagChange}
        />
        <TablesAppointment
          showAllTabs={showAllTabs}
          appointment={appointment}
          setFlagChange={setFlagChange}
          flagChange={flagChange}
        />  
    </div> 
  );
}

export default MainTab;
