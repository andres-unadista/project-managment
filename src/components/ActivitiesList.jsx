import React, { useEffect, useState, useCallback } from 'react';
import {listActivities} from '../services/activitiesService'
import {formateDate} from '../helpers/formateDate';

const ActivitiesList = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);   

    useEffect(() => {
        const fetchActivities = async () => {
          try {
            const activitiesData = await listActivities(); // Llama al servicio para obtener las actividades
            setActivities(activitiesData.activities); // Almacena los proyectos en el estado local
            setLoading(false); // Cambia el estado de carga a falso una vez que se han cargado los datos
          } catch (error) {
            console.error('Error fetching activities:', error);
            setLoading(false); // Cambia el estado de carga en caso de error
          }
        };
    
        fetchActivities();
      }, []);

      return (
        <div>
          
    
          {loading ? (
            <p>Cargando proyectos...</p>
          ) : (
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Fecha Inicial</th>
                  <th scope="col">Fecha Final</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Detalle</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={activity.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{activity.name}</td>
                    <td>{formateDate(activity.date_start)}</td>
                    <td>{formateDate(activity.date_end)}</td>
                    <td>{activity.state}</td>
                    <td><button type="button" className="btn btn-info">Info</button></td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      );
}

export default ActivitiesList