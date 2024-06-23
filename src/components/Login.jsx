import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';

export const Login = () => {
  const { setUser } = useContext(Context);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleUsernameChange = (e) => {
    const value = e.target.value.replace(/\s+/g, '').toLowerCase();
    setUsername(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setName(value);
  };


  const saveData = (e) => {
    e.preventDefault();
    let identified_user = {
      username: username,
      name: name,
      phone: phone,
    };
    setUser(identified_user);
    console.log(identified_user);
  };

  return (
   
    <div>
      
      
      
      <h1 className="text-center">Gestor de Proyectos</h1>
      <form className="login" onSubmit={saveData}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={name}
          onChange={handleNameChange}
          required
        />
        
        <input type="submit" value="Iniciar Sesión" />
      </form>
      
    </div>
    
  );
};
