import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import InputBox from '../InputBox/InputBox';
import HeaderAll from '../HeaderAll/HeaderAll';
import Alert from '../Alert/Alert';
import Bodypic from '../../Img/bodypic.svg';
import './Autoriz.css';

function AutorizationPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [text, setText] = useState('');
  const [alertStyle, setAlertStyle] = useState('');
  const history = useHistory();

  const errorMessage = (textError) => {
    setAlertStyle('error');
    setCheck(true);
    setText(textError);
  };

  const addNewUser = async () => {
    const reg = /(?=.*[A-Za-z])(?=.*[0-9]){6,}/;
    if (login.length < 6) {
      return errorMessage('Логин должен быть более 6 символов');
    }
    if (!password.match(reg) && password.length < 6) {
      return errorMessage(
        'В пароле должна быть как минимум одна цифра и латинские буквы',
      );
    }
    try {
      await axios
        .post('http://localhost:8000/LogIn', {
          login,
          password,
        })
        .then((res) => {
          setLogin('');
          setPassword('');
          history.push('/maintab');
        });
    } catch (e) {
      setText('Пользователь уже существует');
    }
  };
  
  const swapPage = () => {
    history.push('/registration');
  };

  return (
    <div>
      <HeaderAll name="Зарегистрироваться в системе" />
      <div className="body-style-svg1">
        <img
          className="body-pic1"
          alt="bodyPic"
          src={Bodypic}
        />
        <div className="registration-box1">
          <span className="reg-span1">Войти в систему</span>
          <span className="reg-login1">Login:</span>
          <input
            className="reg-input1"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            name="login"
            type="text"
            placeholder="Login"
          />
          <label className="reg-login1">Password:</label>
          <InputBox
            placeholder="Password"
            setPassword={setPassword}
            password={password}
          />
          <div className="user-box1">
            <button
              className="new-user-button1"
              onClick={() => addNewUser()}
            >
              Войти
            </button>
            <label
              className="reg-label1"
              onClick={() => swapPage()}
            >
              Зарегистрироваться
            </label>
          </div>
        </div>
      </div>
      <Alert
        text={text}
        state={check}
        setCheck={setCheck}
        alertStyle={alertStyle}
      />
    </div>
  );
}

export default AutorizationPage;
