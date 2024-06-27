import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Users = () => {

  //const contextShare = useContext(Context);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      
      <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">  <i class="fa-solid fa-user-plus"></i>   Crear Usuario</button>
      
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Crear Usuarios</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Nombre</label>
                  <input type="text" className="form-control" id="name"/>
                </div>
                <div className="mb-3">
                  <label for="recipient-email" className="col-form-label">Correo</label>
                  <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3 ">
                  <label for="recipient-email" className="col-form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password"/>
                </div>
                <div className="input-group mb-3">
                   <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Rol</label>
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
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> <i class="fa-solid fa-rectangle-xmark"></i> Cerrar </button>
              <button type="button" className="btn btn-primary"> <i class="fa-solid fa-floppy-disk"></i> Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
