import React, {useState} from 'react';
// import AutorizationPage from './Autorization/AutorizationPage';
import RegistrationPage from './Components/Registration/RegistrationPage';
import {Switch, Route, Redirect } from 'react-router-dom';
import MainTab from './Components/MainTab/MainTab';
import './App.css';

function App() {
  
  return (
    <div className="allPages">
      <Switch>
        <Route path='/maintab' component={MainTab}/>
        <Route path='/registration' component={RegistrationPage}/>
        {/* <Route path='/autorization' component={AutorizationPage}/> */}
      </Switch>
      <Redirect from='/' to='/registration'/>
    </div>
  );
}

export default App;
