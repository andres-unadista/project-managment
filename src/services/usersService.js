// Creacion de Funciones para el llamado de datos al Backend

// Metodo para Login 
/*
export const login = function ({email,password}){

    
        const url = "https://proyecto-api-2024.000webhostapp.com/api/login";
        const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
            email,
            password
        }),
        };
        fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });

};
*/

export const login = function (form){
       

        const formData = new FormData(form); // Crea un objeto FormData con los datos del formulario

        fetch('https://proyecto-api-2024.000webhostapp.com/api/login', {
        method: 'POST',
                body: formData,
                headers: {
                    Accept: "application/json",
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

// Metodo para Listar Usuarios

export const userlist = function (){


    
    fetch('https://proyecto-api-2024.000webhostapp.com/api/user/all', {
    method: 'GET',
    headers: {
        Accept: "application/json",
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
