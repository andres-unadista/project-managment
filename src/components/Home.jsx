import React, { useContext } from 'react'
import { Context } from '../context/Context'
import logo from "../assets/project_managment.jpg";
export const Home = () => {

  const contextShare = useContext(Context);

  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Gestor de Proyectos</p>
      <div className="logo">
              <img src={logo} alt="logo" />
            </div>
    </div>
  )
}