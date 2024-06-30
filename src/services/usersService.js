// Creacion de Funciones para el llamado de datos al Backend

// Metodo para Login 
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

// Metodo para Listar Usuarios
/*
export const userlist = function ({email,password}){

    
    const url = "https://proyecto-api-2024.000webhostapp.com/api/user/all";
    const options = {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
    }
    };
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });

};
*/