import React, {useEffect}  from 'react';
//import { Context } from '../context/Context';
import {login} from '../services/usersService.js'


export const Login = (props) => {

  const access = (e) => {

    //console.log(props);
    e.preventDefault(); // Evitar que se actualice la pag
    login(e.target);
    //console.log(e.target);
    props.statusSession(true);
    


  };
  useEffect(() => {
    console.log(props);
  }, [props]);

  useEffect(() => {
  	var element = document.querySelector("footer");
	  element.classList.add("footer-status");

   
    return () => {
      var element = document.querySelector("footer");
      element.classList.remove("footer-status");
    };
  }, []);
  
  

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
