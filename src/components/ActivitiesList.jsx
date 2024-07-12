import React, { useEffect, useState, useCallback } from 'react';
import {listActivities} from '../services/activitiesService'
//import {formateDate} from '../helpers/formateDate';

import Chart from 'chart.js/auto';


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

      
        
      useEffect(() => {

        const data = {
          labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        };
        var ctx = document.getElementById('myDoughnutChart').getContext('2d');
        var chart = new Chart(ctx, 
          {
          type: 'pie',
          data: data
          }
        );
      
        // when component unmounts
        return () => {
            chart.destroy()
          }
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
                    <td><button type="button" className="btn btn-info">Info</button></td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        

        <canvas id="myDoughnutChart" width="200" height="200"></canvas>
            
        </div>
      );
}

export default ActivitiesList