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


  export const DateFormat = (date) => {
    const fecha = new Date(date);
  
    // Establecer horas, minutos y segundos a cero
    fecha.setHours(0, 0, 0, 0);
  
    // Obtener año, mes y día
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }

