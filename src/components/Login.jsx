import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/Context';
import {login} from '../../src/services/usersService.js'




export const Login = () => {
  /*
  useEffect(() => {
    //Runs only on the first render
    login();

  }, []);
  */

  const access = (e) => {
    e.preventDefault(); // Evitar que se actualice la pag
    let identified_user = {
      email: email,
      password: password
     
    };
    login(e.target);
    console.log(e.target);
  };
  

  const { setUser } = useContext(Context);
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleUserEmailChange = (e) => {
    const value = e.target.value.replace(/\s+/g, '').toLowerCase();
    setUserEmail(value);
  };

  const handlePasswordChange = (e) => {     
      setPassword(e.target.value);
  };

/*
  const saveData = (e) => {
    e.preventDefault();
    let identified_user = {
      username: username,
      password: password
     
    };
    setUser(identified_user);
    console.log(identified_user);
  };
  */

  return (
   
    <div>
      <h1 className="text-center">Iniciar Sesión</h1>
      <form className="login" onSubmit={access}>
        
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={email}
          onChange={handleUserEmailChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
          required
        /> 
        <input type="submit" value="Iniciar Sesión" />
      </form>   
    </div>
    
  );
};
