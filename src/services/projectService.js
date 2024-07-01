// Funcion para litar projectos
  export const project = async function () {
    try {
      const token = localStorage.getItem("jwt");
  
      const response = await fetch('http://jwt.local:8012/api/project', {
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

// Funcion para listar las actividades de un proyecto especifico
export const projectActivities = async function () {
  try {
    
    const token = localStorage.getItem("jwt");
    const id_project = localStorage.getItem("id_project");

    const response = await fetch('http://jwt.local:8012/api/activity/all/'+id_project, {
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


  // Guardad Projectos 

  export const createProject = async function (newProject) {
    console.log(newProject);
    try {
      const token = localStorage.getItem("jwt");
      const formData = new FormData(newProject);
      const response = await fetch('http://jwt.local:8012/api/project/store', {
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
      console.error('Error al crear Proyectos nuevos:', error);
      throw error; // Propagamos el error para que el componente lo pueda manejar
    }
  };
  