export const formateDate = (datehours)=>{

    const date = new Date(datehours); // Obtener la fecha actual

    // Opciones de formato
    const options = {
    year: 'numeric', // 'numeric', '2-digit'
    month: 'long', // 'numeric', '2-digit', 'long', 'short', 'narrow'
    day: 'numeric', // 'numeric', '2-digit'
    weekday: 'long', // 'long', 'short', 'narrow'
    };

    const formattedDate = date.toLocaleDateString('es-ES', options);
    return formattedDate;
    //console.log(formattedDate); // Ejemplo de salida: "viernes, 1 de julio de 2024"

}