import {Route,Routes} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';
import Otp from './pages/Otp';
import Register from './pages/Register';

import 'react-toastify/dist/ReactToastify.css'
import "@chatscope/chat-ui-kit-react"
import './App.css';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/user/otp' element={<Otp/>}/>
        <Route path='/register' element={<Register/>}/>
        
      </Routes>
     
    </div>
  );
}

export default App;
