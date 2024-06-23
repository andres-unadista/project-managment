import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const Projects = () => {

  const {user} = useContext(Context);

  return (
    <div>
      <h1>Página de Proyectos</h1>
      <p className='text-primary'>Nombre: {user.name}</p>
      <p className='text-primary'>Teléfono: {user.phone}</p>
  </div>
  )
}
