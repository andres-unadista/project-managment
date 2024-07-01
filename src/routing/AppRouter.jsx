import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { NotFound } from "../components/NotFound";
import { Login } from "../components/Login";
import { Users } from "../components/Users";
import { Activities } from "../components/Activities";
import logo from "../assets/project-managment.png";
import { ProjectActivities } from "../components/ProjectActivities";
//import { SessionContext } from "../context/SessionContext"

export const AppRouter = () => {

  //const { statusSession, setSessionStatus } = useContext(SessionContext);
  
  const statusSession = true;

  return (
    <div>
      <Router>
        <header className="header-nav">
          <nav>
            <div className="logo">
              <img src={logo} alt="logo" className="logo-img" />
            </div>
            <ul>
            { statusSession ? (
                <>
              <li>
                <NavLink to="/">
                 
                  <i className="fa-solid fa-house"></i> Inicio
                </NavLink>
              </li>

              <li>
                <NavLink to="/proyectos">
                  <i className="fa-solid fa-chart-line"></i> Proyectos
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/actividades">
                  <i className="fa-solid fa-list-check"></i>Actividades
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/usuarios">
                  <i className="fa-solid fa-users"></i> Usuarios
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                <i className="fa-solid fa-right-from-bracket"></i> Cerrar Sesión
                </NavLink>
              </li>
              </>
              ) : (
                <li>
                <NavLink to="/login">Iniciar Sesión</NavLink>
              </li>
              )}

             

            </ul>
          </nav>
        </header>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="/inicio" element={<Home />}></Route>
            <Route path="/proyectos" element={<Projects />}></Route>
            <Route path="/proy-acti" element={<ProjectActivities />}></Route>
            <Route path="/actividades" element={<Activities />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/usuarios" element={<Users />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};
