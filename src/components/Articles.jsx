import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const Articles = () => {

  const nameContextArt = useContext(Context);

  return (
    <div>
      <h1>Página de Artículos</h1>
      <p>Comprador: {nameContextArt.user.name}</p>
  </div>
  )
}