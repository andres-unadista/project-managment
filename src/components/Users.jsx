import React, { useContext } from 'react'
//import { UserList } from '../components/UserList'
//import { Context } from '../context/Context'

export const Users = () => {

  //const contextShare = useContext(Context);

  return (
    <div>
      
      <h1>Lista de Usuarios</h1>
      <div className="d-flex justify-content-end">
      <button type="button" className="btn btn-success text-start" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">  <i class="fa-solid fa-user-plus"></i>   Crear Usuario</button>
      </div> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 justify-content-end" id="exampleModalLabel">Crear Usuarios</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 text-start">
                  <label for="form-control" className="col-form-label fw-bold">Nombre</label>
                  <input type="text" className="form-control" id="name"/>
                </div>
                <div className="mb-3 text-start">
                  <label for="email" className="col-form-label fw-bold">Correo</label>
                  <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3 text-start">
                  <label for="password" className="col-form-label fw-bold">Contraseña</label>
                  <input type="password" className="form-control" id="password"/>
                </div>
                <div className="input-group mb-3">
                   <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">Rol</label>
                    </div>
                      <select className="custom-select" id="rol">
                        <option selected>Seleccione Rol...</option>
                        <option value="1">Lider</option>
                        <option value="2">Profesional</option>
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
      
    </div>

  )
}
