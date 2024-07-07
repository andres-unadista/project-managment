import React, { useEffect, useState } from "react";
import { ProjectList } from "./ProjectList";
import { userlist } from "../services/usersService";
import { DateFormat } from "../helpers/formateDate"
// Importa la función para crear proyecto desde tu servicio
// Ajusta la importación según la ubicación real de tu servicio
import { createProject, updateProject } from "../services/projectService";


export const Projects = () => {
  const [project, setProject] =useState(null);
  const [users, setUsers] = useState([]);

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
    
    // Modal 
    var myModal = document.getElementById('projectModal');
    var myForm = document.getElementById('formProject');

    // Escuchar el evento de cierre del modal
    myModal.addEventListener('hidden.bs.modal', function () {
      // Limpiar los campos del formulario
      setProject(null);
      myForm.querySelectorAll('input').forEach(input => {
        input.value = ''; // Establecer el valor del input a una cadena vacía
      });

    });
    // 
    
    console.log("Modal por proyecto");

  }, []);

  const handleSaveProject = (e) => {
   
    try {
      // Llamar al servicio para crear el proyecto en el backend
      const form = document.getElementById('formProject');

      createProject(form);
      // Puedes implementar una función para recargar la lista de proyectos en ProjectList o usar un estado compartido si es necesario
    } catch (error) {
      console.error("Error al crear proyecto:", error);
      // Manejar el error apropiadamente, como mostrar un mensaje de error al usuario
    }
  };

  const handleUpdateProject = (e) => {
   
    try {
      // Llamar al servicio para crear el proyecto en el backend
      const form = document.getElementById('formProject');

      //console.log(project)
      updateProject(form,project.id);
      
      // Puedes implementar una función para recargar la lista de proyectos en ProjectList o usar un estado compartido si es necesario
    } catch (error) {
      console.error("Error al crear proyecto:", error);
      // Manejar el error apropiadamente, como mostrar un mensaje de error al usuario
    }
  };

 

 

  return (
    <div>
      <h1>Lista de Proyectos</h1>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-success text-start"
          data-bs-toggle="modal"
          data-bs-target="#projectModal"
          data-bs-whatever="@mdo"
          id="btnProject"

        >
          <i className="fa-solid fa-chart-line"></i> Crear Proyecto
        </button>
      </div>
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              
              {project ? (
                <h1 className="modal-title fs-5 justify-content-end" id="projectModalLabel">Editar Proyecto</h1>
              ) : (
                <h1 className="modal-title fs-5 justify-content-end" id="projectModalLabel">Crear Proyecto</h1>
              )}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form  id="formProject">
                <div className="mb-3 text-start">
                  <label htmlFor="name" className="col-form-label fw-bold">
                    Nombre del Proyecto
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    value={project?.name}
                    onChange={(e)=>{
                      setProject({...project,  name: e.target.value})
                    }}
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
                      value={project? DateFormat(project?.date_start): null }
                      onChange={(e)=>{
                        setProject({...project,  date_start: e.target.value})
                      }}
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
                      value={project? DateFormat(project?.date_end): null }
                      onChange={(e)=>{
                        setProject({...project,  date_end: e.target.value})
                      }}
                    />
                  </div>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="projectState">
                      Estado del Proyecto
                    </label>
                  </div>
                  <select className="custom-select" name="state" id="state"  value={project?.state}  onChange={(e)=>{
                        setProject({...project,  state: e.target.value})
                      }}>
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
                  <select className="custom-select" name="id_user" id="id_user" value={project?.id_user} onChange={(e)=>{
                        setProject({...project,  id_user: e.target.value})
                      }}>
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
                  {project ? (
                      <button type="button" className="btn btn-primary" onClick={handleUpdateProject}>
                      <i className="fa-solid fa-floppy-disk"></i> Actualizar
                    </button>
                  ) : (
                    <button type="button" className="btn btn-primary" onClick={handleSaveProject}>
                    <i className="fa-solid fa-floppy-disk"></i> Guardar
                  </button>
                  )}
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ProjectList project={setProject}/>
      {/* ProjectList se encarga de mostrar la lista de proyectos */}
    </div>
  );
};
