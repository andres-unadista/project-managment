import {formatDateToCustomFormat} from '../helpers/formateDate';

export const listActivities = async function () {
    try {
      
      const token = localStorage.getItem("jwt");
      
  
      const response = await fetch('http://jwt.local:8012/api/activity', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Respuesta recibida:', data);
      return data; // Devolvemos los datos obtenidos para que el componente los pueda usar
    } catch (error) {
      console.error('Error al obtener el listado de las actividades:', error);
      throw error; // Propagamos el error para que el componente lo pueda manejar
    }
  };
  // Servicio para Guardar Actividades por id de proyecto

  export const createActivity = async function (newActivity) {
    //console.log(newActivity);
    try {
      const token = localStorage.getItem("jwt");
      const id_project = localStorage.getItem("id_project");

      const formData = new FormData(newActivity);
      formData.append('id_project', id_project);

      const date_start = formData.get("date_start");
      //let fecha = new Date(date_start);
      //let datetime = fecha.toISOString();
      formData.set('date_start',formatDateToCustomFormat(date_start));

      const date_end = formData.get("date_end");
      //fecha = new Date(date_end);
      //datetime = fecha.toISOString();
      formData.set('date_end',formatDateToCustomFormat(date_end));
    
      

      const response = await fetch('http://jwt.local:8012/api/activity', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Respuesta recibida:', data);
      return data; // Devolvemos los datos obtenidos para que el componente los pueda usar
    } catch (error) {
      console.error('Error al crear Actividad:', error);
      throw error; // Propagamos el error para que el componente lo pueda manejar
    }
  };