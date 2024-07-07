import React, { useEffect, useState } from 'react';
import { userlist } from '../services/usersService';

export const UserList = () => {
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

  return (
    <div>
     

      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
