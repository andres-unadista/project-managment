import { createContext, useState } from "react";

// Crear un contexto de autenticación
const AuthContext = createContext();

// Definir el componente proveedor de contexto AuthProvider
export const AuthProvider = ({ children }) => {

  // Estado local para guardar la información del usuario y verificar si está autenticado
  const [statusSession, setStatusSession] = useState(false);


   // Renderizar el proveedor de contexto con el contexto AuthContext.Provider
  return (
    <AuthContext.Provider
      value={{
        // Valores que se comparten a través del contexto
        statusSession,
        setStatusSession
        
      }}
    >
      {children} {/* Renderiza los componentes hijos envueltos por el proveedor */}
    </AuthContext.Provider>
  )
};
export default AuthContext;