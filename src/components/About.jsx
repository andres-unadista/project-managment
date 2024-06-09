import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const About = () => {

  const objectContext = useContext(Context);

  return (
    <div>
      <h1>Página de Acerca de Nosotros</h1>
      <p>Datos del cliente:</p>
      <pre>{JSON.stringify(objectContext)}</pre>
  </div>
  )
}
