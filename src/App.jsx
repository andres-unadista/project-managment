import 'sweetalert2/src/sweetalert2.scss'

import './App.css';
//import { SessionProvider } from './context/SessionContext';
import { AppRouter } from './routing/AppRouter';
//import PiesChart from "../src/helpers/PiesChart";
function App() {
 

  return (
    <div className="App">
     
        <AppRouter />
        
     

    </div>
  );
}

export default App;
