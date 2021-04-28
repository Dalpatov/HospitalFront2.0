import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import InputBox from '../Components/InputBox';
import HeaderAll from '../Components/HeaderAll';
import Bodypic from '../img/Bodypic.svg';
import Registr from '../styles/Registr.css';
import Alert from '../Components/Alert';

function RegistrationPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [reppassword, setReppassword] = useState('');
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
    if (reppassword !== password) {
      return errorMessage('Пароли не совпадают');
    }
    try {
      await axios.post('http://localhost:8000/createUser', {
        login,
        password,
      }).then((res) => {
        setLogin('');
        setPassword('');
        setReppassword('');
        history.push('/maintab');
      });
    } catch (e) {
      setText('Пользователь уже существует');
    }
  };

  const swapPage = () => {
    history.push('/autorization');
  };

  return (
    <div>
      <HeaderAll name="Зарегистрироваться в системе" />
      <div className="bodyStyleSvg">
        <img
          className="bodyPic"
          src={Bodypic}
        />
        <div className="RegistrationBox">
          <span className="RegSpan">Регистрация</span>
          <span className="RegLogin">Login:</span>
          <input
            className="RegInput"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            name="login"
            type="text"
            placeholder="Login"
          />
          <label className="RegLogin">Password:</label>
          <InputBox
            placeholder="Password"
            setPassword={setPassword}
            password={password}
          />
          <label className="RegLogin">Repeat password:</label>
          <InputBox
            placeholder="Repeat password"
            setPassword={setReppassword}
            password={reppassword}
          />
          <div className="UserBox">
            <button
              className="newUserButton"
              onClick={() => addNewUser()}
            >
              Зарегестрироваться
            </button>
            <label
              className="RegLabel"
              onClick={() => swapPage()}
            >
              Авторизация
            </label>
          </div>
        </div>
      </div>
      <Alert
        text={text}
        state={check}
        setAlertFlag={setCheck}
        alertStyle={alertStyle}
      />
    </div>
  );
}

export default RegistrationPage;
