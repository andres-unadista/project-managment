import React, { useEffect, useState } from 'react'
import {projectActivities} from '../services/projectService'
import {formateDate} from '../helpers/formateDate'
 
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
    

  return (
    <div>
      

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
