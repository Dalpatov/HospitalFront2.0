import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import InputBox from '../Components/InputBox';
import HeaderAll from '../Components/HeaderAll'
import Bodypic from '../img/Bodypic.svg';


function RegistrationPage(){
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [reppassword, setReppassword] = useState('');
  const [errorlogin, seterrorLogin] = useState('');
  const [errorpassword, setErrorpassword] = useState('');
  const [errorreppassword, setErrorreppassword] = useState('');
  let history = useHistory();

  const addNewUser  = async () => {
    await axios.post('http://localhost:8000/createUser', {
      login,
      password,
    }).then(res => {
        setLogin('');
        setPassword('');
        setReppassword('');
        localStorage.setItem('user',login);
        history.push('/maintab');
    });
    
  }

  const swapPage = () =>{
    history.push('/autorization');
  }

  const loginHandler = (e) =>{
    setLogin(e.target.value)
      if(e.target.value.length <6){
        seterrorLogin("Длина логина должна быть больше 6 символов");
      } else {
          seterrorLogin("");
        }
  }

  const passwordHandler = (e) =>{
    setPassword(e.target.value);
    let reg = /(?=.*[A-Za-z])(?=.*[0-9]){6,}/
      if(!reg.test(String(e.target.value).toLowerCase())){
        setErrorpassword("Пароль должен содержать минимум 6 сиволов и 1 число");
      } else {
          setErrorpassword('');
      }
  }
  
  const reppasswordHandler = (e) =>{
    setReppassword(e.target.value);
    let reg = /(?=.*[A-Za-z])(?=.*[0-9]){6,}/
      if(!reg.test(String(e.target.value).toLowerCase())){
        setErrorreppassword("Пароль должен совпадать");
      } else {
          setErrorreppassword('');
        }
  }
  //  const checkValid = () => {
  //   {login !== "" && 
  //   reppassword === password && 
  //   password !== "" ? 
  //   addNewUser():
  //   alert("Пароли должны совпадать, введите заново")}
  //  }

return(
  <div>
    <HeaderAll name='Зарегистрироваться в системе'/>
      <div className="bodySvg">
        <img src={Bodypic}></img>
        <div className="inputLabel">
          <span>Регистрация</span>
          <span>Login</span>
          <input onChange = {e=> loginHandler(e)} 
            value={login} 
            name="login" 
            type="text" 
            placeholder="Login">
          </input>
          <label>Password</label>
          <InputBox placeholder='Password' setPassword={setPassword} password={password}/>
          <label>Repeat password</label>
          <InputBox placeholder='Repeat password' setPassword={setPassword} password={password}/>
            <div className="RightClickst">
              <button onClick={()=> addNewUser()}> Зарегестрироваться</button>         
              <label onClick={()=>swapPage()}>Авторизация</label>
            </div>
        </div>
      </div>  
  </div>
 )
}

export default RegistrationPage;