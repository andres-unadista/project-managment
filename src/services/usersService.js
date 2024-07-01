// Creacion de Funciones para el llamado de datos al Backend
//import { useContext } from "react";
import { SessionContext } from '../context/SessionContext';

export const login = function (form) {

    //  const { statusSession, setSessionStatus } = useContext(SessionContext);

    const formData = new FormData(form); // Crea un objeto FormData con los datos del formulario

    fetch('https://proyecto-api-2024.000webhostapp.com/api/login', {
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
            localStorage.setItem("jwt", data.token);
            //setSessionStatus(true);
            // Aquí puedes manejar la respuesta como sea necesario

        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
            // Aquí puedes manejar errores de la solicitud
        });

}

// Metodo para Listar Usuarios

export const userlist = function () {

    const token = localStorage.getItem("jwt");
    console.log(token);
    fetch('https://proyecto-api-2024.000webhostapp.com/api/user/all', {
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
