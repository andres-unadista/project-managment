import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Home = () => {

  const contextShare = useContext(Context);

  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Hola Bienvenid@ <strong>{contextShare.user.username}</strong>, a mi tienda!!</p>
    </div>
  )
}
