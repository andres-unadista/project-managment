// Creacion de Funciones para el llamado de datos al Backend
//import { useContext } from "react";
import { SessionContext } from '../context/SessionContext';

export const login = function (form) {

    //  const { statusSession, setSessionStatus } = useContext(SessionContext);

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
            // Aquí puedes manejar la respuesta como sea necesario

        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
            // Aquí puedes manejar errores de la solicitud
        });

}

// Metodo para Listar Usuarios
/*
export const userlist = function () {

    const token = localStorage.getItem("jwt");
    //console.log(token);
    fetch('http://127.0.0.1:8000/api/user/all', {
        method: 'GET',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json(); // Devuelve los datos de la respuesta como JSON
        })
        .then(data => {
            console.log('Respuesta recibida:', data);
            // Aquí puedes manejar la respuesta como sea necesario
        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
            // Aquí puedes manejar errores de la solicitud
        });
}
*/
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
export const createUser = async function () {
   /*
    try {
      const token = localStorage.getItem("jwt");
  
      const response = await fetch('http://127.0.0.1:8000/api/user/all', {
        method: 'POST',
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
      */
  };

