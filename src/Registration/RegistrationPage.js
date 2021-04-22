import React, {useState} from 'react';
import axios from 'axios';


function RegistrationPage({setTabs}){
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [reppassword, setReppassword] = useState('');
  const [errorlogin, seterrorLogin] = useState('');
  const [errorpassword, setErrorpassword] = useState('');
  const [errorreppassword, setErrorreppassword] = useState('');

  const addNewTask  = async () => {
    await axios.post('http://localhost:8000/createUser', {
      login,
      password,
    }).then(res => {
        setLogin('');
        setPassword('');
    });
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
   const checkValid = () => {
    {login !== "" && 
    reppassword === password && 
    password !== "" ? 
    addNewTask() &&
    setTabs(1): 
    alert("Пароли должны совпадать, введите заново")}
   }

  return(
    <form >
      <h1>Зарегестрироваться в системе</h1>
        <div>
          <h2>Регистрация</h2>
          <label>Login</label>
          <div>{errorlogin}</div>
          <input onChange = {e=> loginHandler(e)} 
            value={login} 
            name="login" 
            type="text" 
            placeholder="Login">
          </input>
          <label>Password</label>
          <div>{errorpassword}</div>
          <input onChange = {e=> passwordHandler(e)} 
            value={password} 
            name="password" 
            type="text" 
            placeholder="Password">
          </input>
          <label>Repeat password</label>
          <div>{errorreppassword}</div>
          <input onChange = {e=> reppasswordHandler(e)} 
            value={reppassword}             
            name="reppassword" 
            type="text" 
            placeholder="Repeat password">
          </input>
          <button onClick={()=> checkValid()}> Зарегестрироваться</button>         
          <label>Авторизация</label>
        </div>
 </form>
 )
}

export default RegistrationPage;