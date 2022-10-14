
import './App.css';

import Navbar from './Components/Navbar';

import Form from './Components/Form';

import Login from './Components/Login';

import Home from './Components/Home';

import Aboutus from './Components/Aboutus';

import Edit from './Components/Edit';



import { BrowserRouter as Router ,
  Route,
  Link, 
  Switch, 
  Routes,
  NavLink
} from 'react-router-dom';



function App() {
  return (
    <>
    
      <Navbar/>  

      <Routes>
            <Route path = "/login" element={<Login/>} />
            <Route path = "/signup" element={<Form/>} />
            <Route path = "/home" element={<Home/>} />
            <Route path = "/" element={<Home/>} />
            <Route path = "/aboutus" element={<Aboutus/>} />
            <Route path = "/edit" element={<Edit/>} />
      </Routes>

      

      
     
      
       

    </>
  );
}

export default App;
