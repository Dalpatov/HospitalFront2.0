import React, {useState} from 'react';
import AutorizationPage from './Autorization/AutorizationPage';
import RegistrationPage from './Registration/RegistrationPage';
import {Switch, Route, Redirect } from 'react-router-dom';
import MainTab from './MainTab/MainTab';


import './App.css';

function App() {
    
  const [tabs, setTabs]= useState(0);
  return (

    <div className="allPages">
    <Switch>
          <Route path='/maintab' component={MainTab}/>
          <Route path='/registration' component={RegistrationPage}/>
          <Route path='/autorization' component={AutorizationPage}/>
    </Switch>
    
      {!tabs && <RegistrationPage  setTabs={setTabs}/>}
      {tabs === 1 && <AutorizationPage setTabs={setTabs}/>}
      {tabs === 2 && <MainTab setTabs={setTabs}/>}
   </div>
  );
}

export default App;
