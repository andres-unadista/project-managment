import React, { useEffect, useState, useCallback } from 'react';
import {listActivities} from '../services/activitiesService'
//import {formateDate} from '../helpers/formateDate';
import alerta from '../assets/alerta_retrazo_01.gif';




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
        //grafica();
      }, []);

      const validateDays =(date2)=>{
        const dateNow = new Date();
        const dateFinish = new Date(date2);
        const diffTimeNow = (dateFinish-dateNow);
        
        return diffTimeNow < 0

      }
      

      
        
   


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
                  <th scope="col">Actividades Atrasadas</th>
                 
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{activity.name}</td>
                    <td>{activity.date_start}</td>
                    <td>{activity.date_end}</td>
                    
                    {activity.state == 1 ? (
                      <td><i className="fa-solid fa-check"></i></td> 
                    ) : (
                      <td><i className="fa-solid fa-xmark"></i></td> 
                    )}
                    {activity.state == 0 && validateDays(activity.date_end) ? (
                      <td><img src={alerta} width="17px" height="17px"/></td>
                    ) : (
                      <td></td>
                    )}
                    
                   
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        

       
            
        </div>
      );
}

export default ActivitiesList