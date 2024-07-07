import React  from 'react';
//import { Context } from '../context/Context';
import {login} from '../services/usersService.js'





export const Login = () => {

  const access = (e) => {
    e.preventDefault(); // Evitar que se actualice la pag
    login(e.target);
    console.log(e.target);



  };

  
  

  return (
   
    <div>
      <h1 className="text-center">Iniciar Sesión</h1>
      <form className="login" onSubmit={access}>
        
        <input
          type="email"
          name="email"
          placeholder="Correo"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        /> 
        <input type="submit" value="Iniciar Sesión" />
      </form>   
    </div>
    
  );
};
