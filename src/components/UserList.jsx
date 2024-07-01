import React, {useEffect} from 'react'
import {userlist} from '../services/usersService'

export const UserList = () => {

  useEffect(() => {
    
    userlist();

  }, []);

  return (
    <div>
      <p>Listado de Usuarios</p>
    </div>
  )
}