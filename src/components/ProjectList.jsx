import React, {useEffect} from 'react'
import {project} from '../services/projectService.js'

export const ProjectList = () => {

    useEffect(() => {
        //Runs only on the first render
        project();
    
    }, []);
    return (
        <div>
            
            <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Fecha Inicial</th>
              <th scope="col">Fecha Final</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Desarrollo FullStack</td>
              <td>24-06-2024</td>
              <td>30-06-2024</td>
              <td>Editar</td>
              <td>Eliminar</td>
              
            </tr>
          </tbody>
        </table>

        </div>
    )
}
