import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderAll from '../HeaderAll/HeaderAll';
import BodyMaket from '../BodyMaket/BodyMaket';
import TablesAppointment from '../TablesAppointment/TablesAppointment';
import './MainTab.css';

const MainTab = () => {
  const [sort, setSort] = useState(false);
  const [sortBy, setSortBy] = useState(false);
  const [noneSort, setNoneSort] = useState(false);
  const [appointment, setAppointment] = useState([]);
  const [flagChange, setFlagChange] = useState(false);

  useEffect(() => showAllTabs(), []);

  const sortingElememnts = (data) => {
    setAppointment(data);
  }

  const showAllTabs = async () =>{
    await axios.get('http://localhost:8000/allTabs').then(res => {
      setAppointment(res.data.data);
    });
  }

  const Sorting = (e) => {
    setSort(e.target.value);
    appointment.sort((a, b) => a[e.target.value] > b[e.target.value] ? 1 : a[e.target.value] < b[e.target.value] ? -1 : 0);
    
    if(e.target.value !== '_id') {
      setSortBy(1);
    } else {
      showAllTabs();
      setSortBy('');
      setSort('');
      setNoneSort(0);
    }
    setAppointment(appointment);
  }

  const SortingBy = (e) => {
    setSortBy(e.target.value);
    const flag = e.target.value === "asc";
    appointment.sort((a, b) => b[sort] > a[sort] ? (flag ? -1 : 1) : b[sort] < a[sort] ? (flag ? 1 : -1)  : 0);
    setAppointment(appointment);
  } 

  return (
    <div className="all-priems">
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
          sortingElememnts={sortingElememnts}
          SortingBy={SortingBy}
          Sorting={Sorting}
          sort={sort}
          sortBy={sortBy}
        />  
    </div> 
  );
}

export default MainTab;
