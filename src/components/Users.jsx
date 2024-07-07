import React, { useEffect, useState } from 'react';
import { UserList } from './UserList';
import { createUser, updateUser } from '../services/usersService'; // Ajusta la importación según la ubicación real de tu servicio

export const Users = () => {

  const [user, setUser] = useState(); //



  const handleSaveUser = (e) => {
    //e.preventDefault();
    try {
      // Crear objeto con los datos del nuevo proyecto
      const form = document.getElementById('myForm');
      // Llamar al servicio para crear el proyecto en el backend
      createUser(form);

      // Puedes implementar una función para recargar la lista de proyectos en ProjectList o usar un estado compartido si es necesario
    } catch (error) {
      console.error("Error al crear usuario:", error);
      // Manejar el error apropiadamente, como mostrar un mensaje de error al usuario
    }
  };
  const handleUdapteUser = (e) => {
    //e.preventDefault();
    try {
      // Crear objeto con los datos del nuevo proyecto
      const form = document.getElementById('myForm');
      // Llamar al servicio para crear el proyecto en el backend
      updateUser(form,user.id);

      // Puedes implementar una función para recargar la lista de proyectos en ProjectList o usar un estado compartido si es necesario
    } catch (error) {
      console.error("Error al crear usuario:", error);
      // Manejar el error apropiadamente, como mostrar un mensaje de error al usuario
    }
  };

  

  // Limpiar Modal al cerrar
  useEffect(() => {
    var myModal = document.getElementById('exampleModal');
    var myForm = document.getElementById('myForm');

    // Escuchar el evento de cierre del modal

    myModal.addEventListener('hidden.bs.modal', function () {
      // Limpiar los campos del formulario
      setUser(null);
      myForm.querySelectorAll('input').forEach(input => {
        input.value = ''; // Establecer el valor del input a una cadena vacía

      });

    });

  }, []);
/*
  const changeInput= (e)=>{

  }
*/
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          id="btnUser"
          className="btn btn-success text-start"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          <i className="fa-solid fa-user-plus"></i> Crear Usuario
        </button>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            {user ? (
              <h1 className="modal-title fs-5 justify-content-end" id="exampleModalLabel">Editar Usuario</h1>
            ) : (
              <h1 className="modal-title fs-5 justify-content-end" id="exampleModalLabel">Crear Usuario</h1>
            )}
              
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form  id="myForm">
                <div className="mb-3 text-start">
                  <label htmlFor="name" className="col-form-label fw-bold">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={user?.name}
                    onChange={(e)=>{
                      setUser({...user,  name: e.target.value})
                    }}
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="email" className="col-form-label fw-bold">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user?.email}
                    onChange={(e)=>{
                      setUser({...user,  email: e.target.value})
                    }}
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="password" className="col-form-label fw-bold">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="role">Rol</label>
                  </div>
                  <select
                    className="custom-select"
                    id="role"
                    name="role"
                    value={user?.role}
                    onChange={(e)=>{
                      setUser({...user,  role: e.target.value})
                    }}
                  >
                    <option value="Lider">Lider</option>
                    <option value="Profesional">Profesional</option>
                    <option value="admin">admin</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    <i className="fa-solid fa-rectangle-xmark"></i> Cerrar
                  </button>
                  {user ? (
                    <button type="button" className="btn btn-primary" onClick={handleUdapteUser}>
                     <i className="fa-solid fa-floppy-disk"></i> Actualizar
                    </button>
                  ) : (
                    <button type="button" className="btn btn-primary" onClick={handleSaveUser}>
                    <i className="fa-solid fa-floppy-disk"></i> Guardar
                    </button>
                  )}
                
                 
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <UserList user={setUser} /> {/* Asumiendo que UserList se encarga de mostrar la lista de usuarios */}
      {user ? (
        <p>{user.name}</p>
      ) : (
        <p>{'User Null'}</p>
      )}
    </div>
  );
};
