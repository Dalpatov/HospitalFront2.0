import React, {useState} from 'react';
import AutorizationPage from './Autorization/AutorizationPage';
import RegistrationPage from './Registration/RegistrationPage';
import {Switch, Route, Redirect } from 'react-router-dom';
import MainTab from './MainTab/MainTab';


import './App.css';

function App() {
    
  
  return (

    <div className="allPages">
    {/* <Switch>
      <Route path='/maintab' component={MainTab}/>
      <Route path='/registration' component={RegistrationPage}/>
      <Route path='/autorization' component={AutorizationPage}/>
    </Switch>
    <Redirect from='/' to='/registration'/>
    {localStorage.getItem('user') 
        ? <Switch><Redirect from='/' to='/maintab' /></Switch> 
        : window.location.href !== 'http://localhost:3000/autorization' 
        ? window.location.href !== 'http://localhost:3000/registration' 
        ? <Redirect from='/' to='/autorization' />
        : null 
        : null
      } */}

      <RegistrationPage/>
   </div>
  );
}

export default App;
