import React, { useEffect, useState, useCallback } from 'react';
import { userlist } from '../services/usersService';

export const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para indicar si se están cargando los datos

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await userlist(); // Llamada al servicio para obtener la lista de usuarios
        setUsers(usersData.users); // Almacenar la lista de usuarios en el estado local
        setLoading(false); // Cambiar el estado de carga a falso una vez que se han cargado los datos
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false); // También cambiar el estado de carga en caso de error
      }
    };

    fetchUsers();
  }, []); // El segundo argumento de useEffect es un array vacío para ejecutar el efecto solo una vez al montar el componente
  
  const abrirModal = useCallback((user) => {
    
    console.log('Usuario clickeado',user);
    props.user(user);
    // Funcion para editar con Modal
    const btnAbrirModal = document.getElementById('btnUser');
     // Obtén una referencia al modal
    btnAbrirModal.click();


  }, []);
/*
  const abrirModal = (id_user)=>{
    
   

   

    // Agrega un listener al evento 'click' del botón
    btnAbrirModal.addEventListener('click', function () {
      // Agrega la clase 'show' al modal y al backdrop para mostrarlos
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.setAttribute('aria-modal', true);
      modal.setAttribute('aria-hidden', false);
    });
    console.log('Hola Mundo'+id_user);
  }
  */

  return (
    <div>


      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre Usuario</th>
              <th scope="col">Correo</th>
              <th scope="col">Rol</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><button type="button" className="btn btn-info" onClick={()=>abrirModal(user)}>Info</button></td>

              </tr>
            ))}
          </tbody>
        </table>

      )}
    </div>
  );
};

export default UserList;
