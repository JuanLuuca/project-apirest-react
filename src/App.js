import './App.css';
import { PrivateRoutes } from './Routes/PrivateRoutes';
import { PublicRoutes } from './Routes/PublicRoutes';

function App() {
  const getToken = localStorage.getItem('token')
  
  return getToken ? <PrivateRoutes/> : <PublicRoutes/>

}

export default App;
