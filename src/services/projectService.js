// Funcion para litar projectos
import Swal from 'sweetalert2';

import { formatDateToCustomFormat } from '../helpers/formateDate'
export const project = async function () {
  try {
    const token = localStorage.getItem("jwt");

    const response = await fetch('http://jwt.local:8012/api/project', {
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
    //console.log('Respuesta recibida:', data);
    return data; // Devolvemos los datos obtenidos para que el componente los pueda usar
  } catch (error) {
    console.error('Error al obtener datos de usuarios:', error);
    throw error; // Propagamos el error para que el componente lo pueda manejar
  }
};

// Funcion para listar las actividades de un proyecto especifico
export const projectActivities = async function () {
  try {

    const token = localStorage.getItem("jwt");
    const id_project = localStorage.getItem("id_project");

    const response = await fetch('http://jwt.local:8012/api/activity/all/' + id_project, {
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
    console.error('Error al obtener datos de usuarios:', error);
    throw error; // Propagamos el error para que el componente lo pueda manejar
  }
};


// Guardar Projectos 

export const createProject = async function (newProject) {
  //console.log(newProject);
  try {
    const token = localStorage.getItem("jwt");
    const formData = new FormData(newProject);
    const response = await fetch('http://jwt.local:8012/api/project/store', {
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
      title: 'Creacion de Proyecto',
      text: '¡Proyecto Creado con Exito!',
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
          window.location.href = '/proyectos';
        }, 2000);

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log('Has cancelado la acción');
      }
    });
    return data; // Devolvemos los datos obtenidos para que el componente los pueda usar
  } catch (error) {
    console.error('Error al crear Proyectos nuevos:', error);
    throw error; // Propagamos el error para que el componente lo pueda manejar
  }
};

// Actualizar Proyectos 
export const updateProject = async function (updateProject, id) {
  //console.log(updateProject);
  //console.log(id);
  try {
    const token = localStorage.getItem("jwt");
    const formData = new FormData(updateProject);
    const response = await fetch('http://jwt.local:8012/api/project/'+id, {
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
      text: '¡Proyecto Actualizado!',
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
          window.location.href = '/proyectos';
        }, 1000);

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log('Has cancelado la acción');
      }
    });


    return data; // Devolvemos los datos obtenidos para que el componente los pueda usar
  } catch (error) {
    console.error('Error al actualizar projecto:', error);
    throw error; // Propagamos el error para que el componente lo pueda manejar
  }
};
