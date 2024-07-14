import 'sweetalert2/src/sweetalert2.scss'

import './App.css';
//import { SessionProvider } from './context/SessionContext';
import { AppRouter } from './routing/AppRouter';
//import PiesChart from "../src/helpers/PiesChart";
function App() {


  return (
    <div>
      <div className="App">

        <AppRouter />



      </div>
      <footer className='text-center footer'>
        <p>Plataforma de Gestión de Proyectos con Funcionalidades de Autenticación, Gestión de Proyectos y Seguimiento de Tareas
        </p>
        <p>Creador por:<br />
          Andrés Fernandez<br />
          Andrés Lozano<br />
          Oscar Atencia</p>
        <p>2024</p>
      </footer>
    </div>
  );
}

export default App;
