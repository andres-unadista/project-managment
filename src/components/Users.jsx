import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Users = () => {

  //const contextShare = useContext(Context);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <p>Listar Usuarios</p>
      <button className='login'>Crear usuarios</button>
    </div>
  )
}
