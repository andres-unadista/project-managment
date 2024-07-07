import React, { useEffect, useState } from "react";
import { ProjectList } from "./ProjectList";
import { userlist } from "../services/usersService";
// Importa la función para crear proyecto desde tu servicio
// Ajusta la importación según la ubicación real de tu servicio
import { createProject } from "../services/projectService";

export const Projects = () => {
  const [users, setUsers] = useState([]);

  const handleSaveProject = (e) => {
    e.preventDefault();
    try {
      // Crear objeto con los datos del nuevo proyecto

      // Llamar al servicio para crear el proyecto en el backend
      createProject(e.target);

      // Puedes implementar una función para recargar la lista de proyectos en ProjectList o usar un estado compartido si es necesario
    } catch (error) {
      console.error("Error al crear proyecto:", error);
      // Manejar el error apropiadamente, como mostrar un mensaje de error al usuario
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await userlist(); // Llamada al servicio para obtener la lista de usuarios
        setUsers(usersData.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Proyectos</h1>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-success text-start"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          <i className="fa-solid fa-chart-line"></i> Crear Proyecto
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 justify-content-end"
                id="exampleModalLabel"
              >
                Crear Proyecto
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSaveProject}>
                <div className="mb-3 text-start">
                  <label htmlFor="name" className="col-form-label fw-bold">
                    Nombre del Proyecto
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div className="row mb-3 text-start">
                  <div className="col-md-6">
                    <label
                      htmlFor="date_start"
                      className="col-form-label fw-bold"
                    >
                      Fecha Inicial
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="date_start"
                      id="date_start"
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="date_end"
                      className="col-form-label fw-bold"
                    >
                      Fecha Final
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="date_end"
                      id="date_end"
                    />
                  </div>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="projectState">
                      Estado del Proyecto
                    </label>
                  </div>
                  <select className="custom-select" name="state" id="state">
                    <option value="1">Ejecución</option>
                    <option value="2">Cancelado</option>
                    <option value="3">Finalizado</option>
                  </select>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="projectState">
                      Listado de Usuarios
                    </label>
                  </div>
                  <select className="custom-select" name="id_user" id="id_user">
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa-solid fa-rectangle-xmark"></i> Cerrar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="fa-solid fa-floppy-disk"></i> Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ProjectList />
      {/* ProjectList se encarga de mostrar la lista de proyectos */}
    </div>
  );
};
