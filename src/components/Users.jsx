import React, { useState } from 'react';
import { UserList } from './UserList';
import { createUser } from '../services/usersService'; // Ajusta la importación según la ubicación real de tu servicio

export const Users = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState(2); // Valor por defecto del rol

  const handleSaveUser = async () => {
    try {
      // Crear objeto con los datos del nuevo usuario
      const newUser = {
        name,
        email,
        password,
        rol
      };

      // Llamar al servicio para crear el usuario en el backend
      await createUser(newUser);

      // Limpiar campos del formulario después de guardar
      setName('');
      setEmail('');
      setPassword('');
      setRol(2); // Restablecer el valor por defecto del rol

      // Actualizar la lista de usuarios (esto puede requerir un enfoque diferente dependiendo de cómo esté implementado UserList)
      // Puedes implementar una función para recargar la lista de usuarios en UserList o usar un estado compartido si es necesario
    } catch (error) {
      console.error('Error al crear usuario:', error);
      // Manejar el error apropiadamente, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-success text-start"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          <i className="fa-solid fa-user-plus"></i> Crear Usuario
        </button>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 justify-content-end" id="exampleModalLabel">Crear Usuarios</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 text-start">
                  <label htmlFor="name" className="col-form-label fw-bold">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="email" className="col-form-label fw-bold">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="password" className="col-form-label fw-bold">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="rol">Rol</label>
                  </div>
                  <select
                    className="custom-select"
                    id="rol"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                  >
                    <option value="1">Lider</option>
                    <option value="2">Profesional</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                <i className="fa-solid fa-rectangle-xmark"></i> Cerrar
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSaveUser}>
                <i className="fa-solid fa-floppy-disk"></i> Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserList /> {/* Asumiendo que UserList se encarga de mostrar la lista de usuarios */}
    </div>
  );
};
