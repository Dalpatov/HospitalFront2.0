import React, { useState } from 'react';
import Headpic from '../../Img/Headpic.svg';
import './HeaderAll.css'
function HeaderAll ({ name }){
  return(
    <div>
      <header className='head'>
        <img src={Headpic}></img>
        <h1 className="registrH1">{name}</h1>
      </header>
    </div>
  )
}
export default HeaderAll;
