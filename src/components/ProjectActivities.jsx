import React, { useEffect, useState, useCallback } from 'react'
import { projectActivities } from '../services/projectService'
//import { formateDate } from '../helpers/formateDate'
import { userlist } from "../services/usersService";
import { createActivity, updateActivity, updateStateActivity } from "../services/activitiesService";
import {statusproject} from '../helpers/statusProjects';

import Chart from 'chart.js/auto';


export const ProjectActivities = () => {

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para indicar si se están cargando los datos
  const [activity, setActivity] = useState(null);
  const [formCreate, setformCreate] = useState(true); // 
  const [sizeActivity, setSizeActivity] = useState({activitiesFinish:0,activitiesInProces:0}); //

  const [percentChart,setPercentChart]= useState({});


  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activitiesData = await projectActivities(); // Llamada al servicio para obtener la lista de usuarios
        setActivities(activitiesData.activities); // Almacenar la lista de actividades
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
    //e.preventDefault();
    try {

      const form = document.getElementById('formActivity');
      // Llamar al servicio para crear el proyecto en el backend
      createActivity(form);


      // Puedes implementar una función para recargar la lista de proyectos en ProjectList o usar un estado compartido si es necesario
    } catch (error) {
      console.error("Error al crear actividades:", error);
      // Manejar el error apropiadamente, como mostrar un mensaje de error al usuario
    }
  };
  // Servicio para actualizar actividad
  const handleUpdateActivity = (e) => {
    // e.preventDefault();
    try {
      const form = document.getElementById('formActivity');
      // Llamar al servicio para crear el proyecto en el backend
      updateActivity(form, activity.id_activity);
      //console.log(e.target);

      // Puedes implementar una función para recargar la lista de proyectos en ProjectList o usar un estado compartido si es necesario
    } catch (error) {
      console.error("Error al crear actividades:", error);
      // Manejar el error apropiadamente, como mostrar un mensaje de error al usuario
    }
  };

  // Limpiar Modal al cerrar
  useEffect(() => {
    var myModal = document.getElementById('exampleModal');
    var myForm = document.getElementById('formActivity');
    // Escuchar el evento de cierre del modal
    myModal.addEventListener('hidden.bs.modal', function () {
      // Limpiar los campos del formulario
      setActivity(null);
      setformCreate(true);
      myForm.querySelectorAll('input').forEach(input => {
        input.value = ''; // Establecer el valor del input a una cadena vacía

      });

    });

  }, []);

  const abrirModal = useCallback((activity) => {

    console.log('actividad clickeada', activity);
    setActivity(activity);
    setformCreate(false);
    console.log(activity);
    //props.project(project);
    // Funcion para editar con Modal
    const btnAbrirModal = document.getElementById('btnActivity');
    // Obtén una referencia al modal
    btnAbrirModal.click();


  }, []);

  const updateState = (id_activity,inputcheckbox)=>{

    if(inputcheckbox.checked){
      updateStateActivity(1,id_activity);
    }else{
      updateStateActivity(0,id_activity);
    }

  };


  useEffect(() => {
    //console.log(activities,'Hola Mundo');
    const finishActivities = activities.filter((activity) => activity.state_activity==1).length;
    const inProcesActivities =activities.filter((activity) => activity.state_activity==0).length;
    setSizeActivity({activitiesFinish:finishActivities,activitiesInProces:inProcesActivities});
    //console.log(finishActivities,inProcesActivities);
    
    const project= JSON.parse(localStorage.getItem('project'));
    
    const date1 = new Date(project.date_start);
    const date2 = new Date(project.date_end);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))+1; 
    //console.log(diffTime + " milliseconds");
    //console.log(diffDays + " days");

    // fecha Actual
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son indexados desde 0
    const día = String(fecha.getDate()).padStart(2, '0'); // Obtener el día y añadir un cero inicial si es necesario
    // Formatear la fecha en "AAAA-MM-DD"
    const fechaActual = `${año}-${mes}-${día}`;

    
    const dateNow = new Date(fechaActual);
    const diffTimeNow = Math.abs(dateNow - date1);
    const diffDaysNow = Math.floor(diffTimeNow / (1000 * 60 * 60 * 24))+1; 
    //console.log(diffTime + " milliseconds");
    console.log(diffDaysNow + "Diferencia en Dias con respecto a la fecha Actual");

    const percentNow = ((diffDaysNow*100)/diffDays).toFixed(2);
    const percentPending = (100-percentNow).toFixed(2);

    setPercentChart({percentNow,percentPending});
    //console.log(percentNow.toFixed(2), percentPending.toFixed(2));




  }, [activities]);

  // Grafica
  useEffect(() => {

    const data = {
      labels: [
        'Actividades Pendientes',
        'Actividades Finalizadas'
      ],
      datasets: [{
        label: 'Actividades',
        data: [sizeActivity.activitiesInProces, sizeActivity.activitiesFinish],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(40, 167, 69)'
        ],
        hoverOffset: 4
      }]
    };
    var ctx = document.getElementById('myDoughnutChart').getContext('2d');
    var chart = new Chart(ctx, 
      {
      type: 'pie',
      data: data,
      options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 16
                    }
                }
            }
        }
    }

      }
    );
  
    // when component unmounts
    return () => {
        chart.destroy()
      }
    }, [sizeActivity]);

  // Grafica Percent
  useEffect(() => {

    const data = {
      labels: [
        'Tiempo Faltante',
        'Tiempo Transcurrido'
      ],
      datasets: [{
        label: 'Tiempo de Ejecución',
        data: [percentChart.percentPending,percentChart.percentNow],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(40, 167, 69)'
        ],
        hoverOffset: 4
      }]
    };
    var ctx = document.getElementById('myDoughnutChart2').getContext('2d');
    var chart = new Chart(ctx, 
      {
      type: 'pie',
      data: data,
      options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 16
                    }
                }
            }
        }
    }

      }
    );
  
    // when component unmounts
    return () => {
        chart.destroy()
      }
    }, [percentChart]);


  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-success text-start"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          id="btnActivity"
        >
          <i className="fa-solid fa-list-check"></i>Crear Actividades
        </button>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {(activity && !formCreate) ? (
                <h1 className="modal-title fs-5 justify-content-end" id="exampleModalLabel">Editar Actividad</h1>
              ) : (
                <h1 className="modal-title fs-5 justify-content-end" id="exampleModalLabel">Crear Actividad</h1>
              )}


              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" >
              <form id="formActivity">
                <div className="mb-3 text-start">
                  <label htmlFor="name" className="col-form-label fw-bold">Nombre de la actividad</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={activity?.activity}
                    onChange={(e) => {
                      setActivity({ ...activity, activity: e.target.value })
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
                      value={activity ? activity?.date_start : null}
                      onChange={(e) => {
                        setActivity({ ...activity, date_start: e.target.value })
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
                      value={activity ? activity?.date_end : null}
                      onChange={(e) => {
                        setActivity({ ...activity, date_end: e.target.value })
                      }}
                    />
                  </div>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="projectState">
                      Encargado de la Actividad
                    </label>
                  </div>
                  <select className="custom-select" name="user_id" id="user_id" value={activity?.id_user}
                    onChange={(e) => {
                      setActivity({ ...activity, id_user: e.target.value })
                    }}>
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

                  {(activity && !formCreate) ? (
                    <button type="button" className="btn btn-primary" onClick={handleUpdateActivity}>
                      <i className="fa-solid fa-floppy-disk"></i> Actualizar
                    </button>
                  ) : (
                    <button type="button" className="btn btn-primary" onClick={handleSaveActivity}>
                      <i className="fa-solid fa-floppy-disk"></i> Guardar
                    </button>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {loading ? (
        <p>Cargando Actividades...</p>
      ) : (
        <div>
        <h3>{JSON.parse(localStorage.getItem('project')).name}</h3>
        <p>{JSON.parse(localStorage.getItem('project')).date_start +' AL '+JSON.parse(localStorage.getItem('project')).date_end}</p>
        <p>{statusproject(JSON.parse(localStorage.getItem('project')).state)}</p>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col"># Id</th>
              <th scope="col">Nombre Actividad</th>
              <th scope="col">Fecha Inicial</th>
              <th scope="col">Fecha Final</th>

              <th scope="col">Responsable</th>
              <th scope="col">Editar</th>
              <th scope="col">Estado</th>


            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={activity.id_activity}>
                <th scope="row">{index + 1}</th>
                <td>{activity.activity}</td>
                <td>{activity.date_start}</td>
                <td>{activity.date_end}</td>
                <td>{activity.user_name}</td>
                <td><button type="button" className="btn btn" onClick={() => abrirModal(activity)}><i className="fa-solid fa-pencil"></i></button></td>
                {activity.state_activity == 1 ? (
                  <td>
                    <div className="form-check form-switch">
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        <input className="form-check-input" onChange={(e) =>updateState(activity.id_activity,e.target)} type="checkbox" id={'check-' + activity.id_activity} checked />
                      </label>
                    </div>
                  </td>
                  /*<td>
                    <i className="fa-solid fa-check"></i></td>*/
                ) : (
                  <td>
                    <div className="form-check form-switch">
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        <input className="form-check-input" onChange={(e) =>updateState(activity.id_activity,e.target)} type="checkbox" id={'check-' + activity.id_activity} />
                      </label>
                    </div>
                  </td>
                  /*<td><i className="fa-solid fa-xmark"></i></td>*/
                )}

              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
      <div className='charts'>
        <canvas id="myDoughnutChart" width="200px" height="200px"></canvas>
        <canvas id="myDoughnutChart2" width="200px" height="200px"></canvas>
      </div>
    </div>
  )
}
