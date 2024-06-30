// Funcion para litar projectos
export const project = function (){

    
    const url = "https://proyecto-api-2024.000webhostapp.com/api/project/";
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
