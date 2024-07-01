import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const Activities = () => {

  //const {user} = useContext(Context);

  return (
    <div>
      <h1>Página de actividades</h1>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><i className="fa-solid fa-list-check"></i> Crear Actividades</button>
      </div>

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
