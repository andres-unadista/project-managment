import 'sweetalert2/src/sweetalert2.scss'

import './App.css';



import { AppRouter } from './routing/AppRouter';

function App() {


  return (
    <div>
      <div className="App">

        <AppRouter />



      </div>
      <footer className='text-center footer'>
      <br /><p><b>Plataforma de gestión de proyectos con funcionalidades de autenticación y seguimiento de tareas
        </b></p>
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
