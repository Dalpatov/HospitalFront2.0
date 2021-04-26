import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import InputBox from '../Components/InputBox';
import HeaderAll from '../Components/HeaderAll'
import Bodypic from '../img/Bodypic.svg';
import AutoRiz from '../styles/AutoRiz.css';

function AutorizationPage(){
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorlogin, seterrorLogin] = useState('');
  let history = useHistory();
  let reg = /(?=.*[A-Za-z])(?=.*[0-9]){6,}/

  const loginUser = async () => {
    
    if(login.length < 6) {
      errorlogin('Логин должен быть более 6 символов');
    }
    else if (password.match(reg) === null) {
      alert('В пароле должна быть как минимум одна цифра и латинские буквы');
    }
    else if (password.length < 6) {
      alert('Пароль должен быть более 6 символов');
    } else {
    await axios.post('http://localhost:8000/LogIn', {
      login,
      password,
    }).then(res => {
        setLogin('');
        setPassword('');
        history.push('/maintab');
    });
    }
  }
  const swapPage = () =>{
    history.push('/registration');
  }

   return(
    <div>
    <HeaderAll name='Зарегистрироваться в системе'/>
      <div className="bodyStyleSvg">
        <img className="bodyPic" src={Bodypic}></img>
        <div className="RegistrationBox">
          <span className="RegSpan">Регистрация</span>
          <span className="RegLogin">Login:</span>
          <input className="RegInput" 
            onChange={(e) => setLogin(e.target.value)}
            value={login} 
            name="login" 
            type="text" 
            placeholder="Login">
          </input>
          <label className="RegLogin">Password:</label>
          <InputBox placeholder='Password'        
            setPassword={setPassword}
            password={password}/>
              <div className="UserBox">
                <button className="newUserButton" onClick={()=> loginUser()}> Войти</button>         
                <label className="RegLabel" 
                onClick={()=>swapPage()}>
                Зарегестрироваться
                </label>
              </div>
        </div>
        
      </div>  
  </div>
  )
}
export default AutorizationPage;