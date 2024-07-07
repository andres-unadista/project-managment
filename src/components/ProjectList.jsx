import React, { useEffect, useState, useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { project } from '../services/projectService';
import {formateDate} from '../helpers/formateDate';

export const ProjectList = (props) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await project(); // Llama al servicio para obtener los proyectos
        setProjects(projectsData.projects); // Almacena los proyectos en el estado local
        setLoading(false); // Cambia el estado de carga a falso una vez que se han cargado los datos
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false); // Cambia el estado de carga en caso de error
      }
    };

    fetchProjects();
  }, []);

  const clickProject = useCallback((id_project) => {
    localStorage.setItem("id_project", id_project);
    console.log('Botón clickeado',id_project);
   {/* <Navigate to="/proy-acti" />*/}
    window.location.href = '/proy-acti';

  }, []);

  const statusproject = (status) => {
    let icons = {1: '<i class="fa-solid fa-arrow-right"></i>', 2: '<i class="fa-solid fa-ban"></i>',3: '<i class="fa-solid fa-check-to-slot"></i>' }

      return (
        <React.Fragment>
          <div dangerouslySetInnerHTML={{ __html: icons[status] }} />
        </React.Fragment>
      )
  }

  const abrirModal = useCallback((project) => {
    
    console.log('proyecto clickeado',project);
    props.project(project);
    // Funcion para editar con Modal
    const btnAbrirModal = document.getElementById('btnProject');
     // Obtén una referencia al modal
    btnAbrirModal.click();


  }, []);

  return (
    <div>
       

      {loading ? (
        <p>Cargando proyectos...</p>
      ) : (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Fecha Inicial</th>
              <th scope="col">Fecha Final</th>
              <th scope="col">Estado</th>
              <th scope="col">Detalle</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (



              <tr key={project.id}>
                <th scope="row">{index + 1}</th>
                <td>{project.name}</td>
                <td>{formateDate(project.date_start)}</td>
                <td>{formateDate(project.date_end)}</td>
                <td>{statusproject(project.state)}</td>
                
                <td><button type="button" className="btn btn-info" onClick={()=>clickProject(project.id)}  >Info</button></td>
                <td><button type="button" className="btn btn-info" onClick={()=>abrirModal(project)}>Editar</button></td>
                <td>Eliminar</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
