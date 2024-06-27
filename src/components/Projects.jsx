import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const Projects = () => {

  const {user} = useContext(Context);

  return (
    <div>
      <h1>Página de Proyectos</h1>
      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Crear Proyecto</button>
      

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
            <tr>
              <th scope="row">2</th>
              <td>e-commerce</td>
              <td>24-06-2024</td>
              <td>30-06-2024</td>
              <td>Editar</td>
              <td>Eliminar</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Pagina Web</td>
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
