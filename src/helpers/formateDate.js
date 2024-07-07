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

//Funcion para formato fecha
export const formatDateToCustomFormat = (date)=> {
    const fecha = new Date(date);
  
    // Establecer horas, minutos y segundos a cero
    fecha.setHours(0, 0, 0);
  
    // Obtener año, mes y día
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
  
    const day = String(fecha.getDate()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day} 00:00:00`;
  
    return formattedDate;
  }
