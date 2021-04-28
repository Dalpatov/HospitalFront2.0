import React, { useState } from 'react';
import Headpic from '../img/Headpic.svg';
import '../styles/HeaderAll.css';

function HeaderAll({ name }) {
  return (
    <div>
      <header className="head">
        <img src={Headpic} />
        <h1 className="registrH1">{name}</h1>
      </header>
    </div>
  );
}
export default HeaderAll;
