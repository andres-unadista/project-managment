import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import { Context } from '../context/Context';

import { Home } from '../components/Home';
import { Articles } from '../components/Articles';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { NotFound } from '../components/NotFound';
import { Login } from '../components/Login';
import { Users } from '../components/Users';
import { Activities} from '../components/Activities'
import logo from '../assets/lotus.png';

export const AppRouter = () => {
  const { user, setUser } = useContext(Context);

  return (
    <div>
      <Router>
        <header className="header-nav">
          <nav>
            <div className="logo">
              <img src={logo} alt="logo" className="logo-img" />
            </div>
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/articulo">Articulos</NavLink>
              </li>
              <li>
                <NavLink to="/acerca-de">Acerca de</NavLink>
              </li>
              <li>
                <NavLink to="/proyectos">Proyectos</NavLink>
              </li>
              <li>
                <NavLink to="/actividades">Actividades</NavLink>
              </li>
              <li>
                <NavLink to="/usuarios">Usuarios</NavLink>
              </li>
              {user.hasOwnProperty('username') && user.username !== null ? (
                <>
                  <li>
                    <NavLink to="/login">{user.username}</NavLink>
                  </li>
                  <li>
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        setUser({});
                      }}
                    >
                      Cerrar Sesión
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login">Identifícate</NavLink>
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
            <Route path="/articulo" element={<Articles />}></Route>
            <Route path="/acerca-de" element={<About />}></Route>
            <Route path="/proyectos" element={<Projects />}></Route>
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
