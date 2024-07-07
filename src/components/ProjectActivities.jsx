import React, { useEffect, useState } from 'react'
import {projectActivities} from '../services/projectService'
import {formateDate} from '../helpers/formateDate'
import { userlist } from "../services/usersService";
import {createActivity} from "../services/activitiesService";

export const ProjectActivities = () => {
   
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para indicar si se están cargando los datos
  
    useEffect(() => {
      const fetchActivities = async () => {
        try {
          const activitiesData = await projectActivities(); // Llamada al servicio para obtener la lista de usuarios
          setActivities(activitiesData.activities); // Almacenar la lista de usuarios en el estado local
          setLoading(false); // Cambiar el estado de carga a falso una vez que se han cargado los datos
        } catch (error) {
          console.error('Error activities for projects:', error);
          setLoading(false); // También cambiar el estado de carga en caso de error
        }
      };
  
      fetchActivities();
    }, []);

    // Listados de Usuarios
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
    }, []);

    /// Servicio para guardar Actividades
    const handleSaveActivity = (e) => {
      e.preventDefault();
      try {
        
        // Llamar al servicio para crear el proyecto en el backend
        createActivity(e.target);
        console.log(e.target);
  
        // Puedes implementar una función para recargar la lista de proyectos en ProjectList o usar un estado compartido si es necesario
      } catch (error) {
        console.error("Error al crear actividades:", error);
        // Manejar el error apropiadamente, como mostrar un mensaje de error al usuario
      }
    };

  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-success text-start"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          <i className="fa-solid fa-list-check"></i> Crear Actividades
        </button>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 justify-content-end" id="exampleModalLabel">Crear Actividades</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSaveActivity}>
                <div className="mb-3 text-start">
                  <label htmlFor="name" className="col-form-label fw-bold">Nombre de la actividad</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
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
                      Encargado de la Actividad
                    </label>
                  </div>
                  <select className="custom-select" name="user_id" id="user_id">
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>
              
              <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                <i className="fa-solid fa-rectangle-xmark"></i> Cerrar
              </button>
              <button type="submit" className="btn btn-primary" >
                <i className="fa-solid fa-floppy-disk"></i> Guardar
              </button>
            </div>
            </form>
            </div>
            
          </div>
        </div>
      </div>

      {loading ? (
        <p>Cargando Actividades...</p>
      ) : (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col"># Id</th>
              <th scope="col">Nombre Actividad</th>
              <th scope="col">Fecha Inicial</th>
              <th scope="col">Fecha Final</th>
              <th scope="col">Estado</th>
              <th scope="col">Responsable</th>
             
             
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={activity.id_activity}>
                <th scope="row">{index + 1}</th>
                <td>{activity.activity}</td>
                <td>{formateDate(activity.date_start)}</td>
                <td>{formateDate(activity.date_end)}</td>
                {activity.state_activity == 1 ? (
                  <td><i className="fa-solid fa-check"></i></td> 
                ) : (
                  <td><i className="fa-solid fa-xmark"></i></td> 
                )}
               
                
                <td>{activity.user_name}</td>
               
               
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
