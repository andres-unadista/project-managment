// Creacion de Funciones para el llamado de datos al Backend

import { SessionContext } from '../context/SessionContext';
import Swal from 'sweetalert2';
export const login = function (form) {

  const formData = new FormData(form); // Crea un objeto FormData con los datos del formulario

  fetch('http://jwt.local:8012/api/login', {
    method: 'POST',
    body: formData,
    headers: {
      Accept: "application/json",
    }
  })
    .then(response => {
      // Devuelve los datos de la respuesta como JSON
      return response.json();
    })
    .then(data => {
      console.log('Respuesta recibida:', data);
      localStorage.setItem("jwt", data.authorization.access_token);
      //setSessionStatus(true);
     
      Swal.fire({
        title: 'Inicio de Sesión',
        text: '¡Bienvenido usuario Autenticado!',
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
            window.location.href = '/';
          }, 2000);

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log('Has cancelado la acción');
        }
      });
      
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario no autenticado!",
        
      });
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
      console.error('Error al enviar datos:', error);
      // Aquí puedes manejar errores de la solicitud
    });

}

// Metodo para Listar Usuarios
export const userlist = async function () {
  try {
    const token = localStorage.getItem("jwt");

    const response = await fetch('http://jwt.local:8012/api/user/all', {
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

// 
export const createUser = async function (newUser) {
  //console.log(newUser);
  try {
    const token = localStorage.getItem("jwt");
    const formData = new FormData(newUser);
    const response = await fetch('http://jwt.local:8012/api/signup', {
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
    console.error('Error al crear usuarios nuevos:', error);
    throw error; // Propagamos el error para que el componente lo pueda manejar
  }
};
// Actualizar 
export const updateUser = async function (newUser, id_user) {
  //console.log(id_user);
  try {
    const token = localStorage.getItem("jwt");
    const formData = new FormData(newUser);
   // console.log(newUser);
    const response = await fetch('http://jwt.local:8012/api/user/edit/' + id_user, {
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
    console.error('Error al actualizar el usuario:', error);
    throw error; // Propagamos el error para que el componente lo pueda manejar
  }
};

