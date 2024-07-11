import {formatDateToCustomFormat} from '../helpers/formateDate';
import Swal from 'sweetalert2';

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

      Swal.fire({
        title: 'Creación de Actividad',
        text: '¡Actividad creada con éxito!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Sí, continuar',
        //cancelButtonText: 'Cancelar'
        
      }).then((result) => {
        if (result.isConfirmed) {
          // Aquí capturas el evento de clic en el botón "OK" (confirmButtonText)
  
          console.log('Has hecho clic en "Sí, continuar"');
          // Puedes ejecutar más código aquí después de hacer clic en "OK"
          
          setTimeout(() => {
            window.location.href = '/proy-acti';
          }, 1000);
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log('Has cancelado la acción');
        }
      });

      console.log('Respuesta recibida:', data);
      return data; // Devolvemos los datos obtenidos para que el componente los pueda usar
    } catch (error) {
      console.error('Error al crear Actividad:', error);
      throw error; // Propagamos el error para que el componente lo pueda manejar
    }
  };

  /// Actualizar actividad
  export const updateActivity = async function (updateActivity, id) {
    //console.log(updateProject);
    //console.log(id);
    try {
      const token = localStorage.getItem("jwt");
      const formData = new FormData(updateActivity);  
      const response = await fetch('http://jwt.local:8012/api/activity/'+id, {
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
      Swal.fire({
        title: 'Actualización',
        text: '¡Actividad actualizada con éxito!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Sí, continuar',
        //cancelButtonText: 'Cancelar'
        
      }).then((result) => {
        if (result.isConfirmed) {
          // Aquí capturas el evento de clic en el botón "OK" (confirmButtonText)
  
          console.log('Has hecho clic en "Sí, continuar"');
          // Puedes ejecutar más código aquí después de hacer clic en "OK"
          
          setTimeout(() => {
            window.location.href = '/proy-acti';
          }, 1000);
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log('Has cancelado la acción');
        }
      });
  
  
      return data; // Devolvemos los datos obtenidos para que el componente los pueda usar
    } catch (error) {
      console.error('Error al actualizar actividad:', error);
      throw error; // Propagamos el error para que el componente lo pueda manejar
    }
  };

  // Actualizar el Estado de una Actividad
  export const updateStateActivity = async function (stateActivity, id) {
    //console.log(updateProject);
    //console.log(id);
    try {
      const token = localStorage.getItem("jwt");
      const formData = new FormData();  
      formData.append('state',stateActivity);

      const response = await fetch('http://jwt.local:8012/api/activity/'+id, {
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
      Swal.fire({
        title: 'Actualización',
        text: '¡Actividad actualizada con éxito!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Sí, continuar',
        //cancelButtonText: 'Cancelar'
        
      }).then((result) => {
        if (result.isConfirmed) {
          // Aquí capturas el evento de clic en el botón "OK" (confirmButtonText)
  
          console.log('Has hecho clic en "Sí, continuar"');
          // Puedes ejecutar más código aquí después de hacer clic en "OK"
          
          setTimeout(() => {
            window.location.href = '/proy-acti';
          }, 1000);
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log('Has cancelado la acción');
        }
      });
  
  
      return data; // Devolvemos los datos obtenidos para que el componente los pueda usar
    } catch (error) {
      console.error('Error al actualizar actividad:', error);
      throw error; // Propagamos el error para que el componente lo pueda manejar
    }
  };
  