import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderAll from '../HeaderAll/HeaderAll';
import BodyMaket from '../BodyMaket/BodyMaket';
import TabsAppoinment from '../TabsAppoinment/TabsAppoinment';

function MainTab() {
  const [appointment, setAppointment] = useState([]);
  const [yourCheck, setYourCheck] = useState(false);

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
          setYourCheck={setYourCheck}
        />
        <TabsAppoinment
          appointment={appointment}
          setYourCheck={setYourCheck}
        />  
    </div> 
  );
}

export default MainTab;
