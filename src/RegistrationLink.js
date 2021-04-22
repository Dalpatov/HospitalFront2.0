import React,{useState} from 'react';

function RegistrationLink(){

  const [login, setLogin]=useState('');
  const [password, setPassword]=useState('');
  const [repas, setRepas]=useState('');

function checkUser(){
  if(login.length && password.length && repas.length){
    alert("ass")
  } else { 
    alert("Заполните все поля")
  }
}
  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.get("login");
    formData.get("password");
    formData.get("repas");
  };
  return(
    <form onSubmit={handleSubmit}>
    <h1>Зарегестрироваться в системе</h1>
      <div>
        <h2>Регистрация</h2>

        <label>Login</label>
        <input id="login"
         name="login"
         type ="text"
         placeholder="Login">
         </input>

        <label>Password</label>        
        <input name="password"
        id= "password"
        type ="text"
        placeholder="Login">
        </input>

        <label>Repeat password</label> 
        <input name ="repas"      
         id= "repas"
         type ="text"
         placeholder="Repeat login">           
         </input>
        <button onClick={()=> checkUser()}> Зарегестрироваться</button>
        <label>Авторизация</label>
      </div>
</form>
 )
}
export default RegistrationLink;