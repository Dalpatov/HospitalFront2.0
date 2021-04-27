import React from 'react';
import Headpic from '../../Img/Headpic.svg';
import './HeaderAll.css';
function HeaderAll ({ name }){
  return(
    <div>
      <header className="head">
        <img src={ Headpic }
        alt="Headpic"
        >
        </img>
        <h1 className="registr-h1">{ name }</h1>
      </header>
    </div>
  )
}
export default HeaderAll;
