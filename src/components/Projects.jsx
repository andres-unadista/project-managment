import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { ProjectList } from './ProjectList';

export const Projects = () => {

  const {user} = useContext(Context);

  return (
    <div>
    <h1>Lista de Proyectos</h1>
    <div className="d-flex justify-content-end">
    <button type="button" className="btn btn-success text-start" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">   <i className="fa-solid fa-chart-line"></i>   Crear Proyectos</button>
    </div> 
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 justify-content-end" id="exampleModalLabel">Crear Proyecto</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3 text-start">
                <label htmlFor="form-control" className="col-form-label fw-bold">Nombre del Proyecto</label>
                <input type="text" className="form-control" id="name"/>
              </div>
              <div className="row mb-3 text-start">
              <div className="col-md-6">
                <label htmlFor="date_start" className="col-form-label fw-bold">Fecha Inicial</label>
                <input type="date" className="form-control" id="date_start"/>
              </div>
              <div className="col-md-6">
                <label htmlFor="date_end" className="col-form-label fw-bold">Fecha Final</label>
                <input type="date" className="form-control" id="date_end"/>
              </div>
              </div>
              <div className="input-group mb-3">
                 <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">Estado del Proyecto</label>
                  </div>
                    <select className="custom-select" id="rol" defaultValue={{ label: "Ejecución", value: 1 }}>
                      <option value="1">Ejecución</option>
                      <option value="2">Cancelado</option>
                      <option value="2">Finalizado</option>
                    </select>
               </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> <i className="fa-solid fa-rectangle-xmark"></i> Cerrar </button>
            <button type="button" className="btn btn-primary"> <i className="fa-solid fa-floppy-disk"></i> Guardar</button>
          </div>
        </div>
      </div>
    </div>
    <ProjectList />
  </div>
  )
}
