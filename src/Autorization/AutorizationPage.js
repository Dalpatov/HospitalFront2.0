import React, {useState} from 'react';
import axios from 'axios';

function AutorizationPage({setTabs}){
  const [login, setLoginIn] = useState('')
  const [password, setPasswordIn] = useState('')
  const [errorlogin, seterrorLogin] = useState('');
  const [errorpassword, setErrorpassword] = useState('');

  const addNewTask  = async () => {
    setTabs(2)
    await axios.post('http://localhost:8000/LogIn', {
      login,
      password,
    }).then(res => {
      
      setLoginIn('');
      setPasswordIn('');
    });
     
  }

  const loginHandler = (e) =>{
    setLoginIn(e.target.value)
      if(e.target.value.length < 6){
        seterrorLogin("Длина логина должна быть больше 6 символов");
      } else {
        seterrorLogin('');
        }
    }

  const passwordHandler = (e) =>{
    setPasswordIn(e.target.value);
    let reg = /(?=.*[A-Za-z])(?=.*[0-9]){6,}/
      if(!reg.test(String(e.target.value).toLowerCase())){
        setErrorpassword("Пароль должен содержать минимум 6 сиволов и 1 число");
      } else {
        setErrorpassword('');
        }
     }
 

  return(
    <form >
    <div>
      <h1>Войти в систему</h1>
    <div>
      <label>Login</label>
      <input onChange = {e=> loginHandler(e)} 
        id="login"
        value={login}
        name="login"
        type ="text"
        placeholder="Login">
      </input>
      <label>Password</label>        
      <input onChange = {e=> passwordHandler(e)}  
        name="password"
        value={password}
        id="password"
        type ="text"
        placeholder="Password">
      </input>
    </div>
    <button onClick={()=> addNewTask()}>LogIn</button>
    <label>Зарегестрироваться</label>  
    </div>
    </form>
  )
}
export default AutorizationPage;