export const listActivities = async function () {
    try {
      
      const token = localStorage.getItem("jwt");
      
  
      const response = await fetch('http://jwt.local:8012/api/activity', {
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
      console.error('Error al obtener el listado de las actividades:', error);
      throw error; // Propagamos el error para que el componente lo pueda manejar
    }
  };