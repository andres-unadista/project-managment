import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Context } from '../context/Context';
import { Home } from '../components/Home';
import { Projects } from '../components/Projects';
import { NotFound } from '../components/NotFound';
import { Login } from '../components/Login';
import { Users } from '../components/Users';
import { Activities} from '../components/Activities'
import logo from '../assets/lotus.png';
import CreateUser from '../components/Createuser';
import UserList from '../components/UserList';

export const AppRouter = () => {
  const { user, setUser } = useContext(Context);

  let mostrarmenu = false;

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
                      <NavLink to="/"> <i class="fa-solid fa-house"></i> Inicio</NavLink>
                    </li>
                    
                    <li>
                      <NavLink to="/proyectos"><i class="fa-solid fa-chart-line"></i> Proyectos</NavLink>
                    </li>
                    <li>
                      <NavLink to="/actividades"><i class="fa-solid fa-list-check"></i>Actividades</NavLink>
                    </li>
                    <li>
                      <NavLink to="/usuarios"><i class="fa-solid fa-users"></i> Usuarios</NavLink>
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
            <Route path="/" element={<Login />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="/inicio" element={<Home />}></Route>
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
