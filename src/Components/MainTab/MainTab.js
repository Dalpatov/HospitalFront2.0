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

<<<<<<< HEAD
  const filterDate = (fromDate, byDate) => {
    let newArray = appointment.filter(val=>{
      if(fromDate && byDate){
      return dateNew > fromDate && dateNew < byDate
      }
      if(fromDate && !byDate) {
        return dateNew >fromDate
      }
      if(byDate && !fromDate) {
        return dateNew < byDate
      } else {
        return false;
      }

  })
  }
=======
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

>>>>>>> 18edc6606c0aca405dee66372b075a10f0a76abf
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
<<<<<<< HEAD
          filterDate={filterDate}
=======
          sortingElememnts={sortingElememnts}
          SortingBy={SortingBy}
          Sorting={Sorting}
          sort={sort}
          sortBy={sortBy}
>>>>>>> 18edc6606c0aca405dee66372b075a10f0a76abf
        />  
    </div> 
  );
}

export default MainTab;
