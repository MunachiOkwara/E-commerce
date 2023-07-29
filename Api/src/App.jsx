import './App.css'
import Header from './Component/Header'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Landingpage from './Component/Landingpage';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Stores from './Pages/Stores';
import car from './assets/car.png'
import Detailed from './Pages/Detailed';
import { MenuItems } from './Menuitems';
import { useState } from 'react';
import { ThemeContext } from './ContextApi/Context';
import Button from './Pages/Button';
import { Layout } from './Inputs/Layout';
import Login from './Pages/Login';
// import { useContext} from 'react';
// import { ThemeContext } from './ContextApi/Context';



function App({}) {
  const {showMenu, toggleMenu} = useState(ThemeContext)

  // const state = useContext(ThemeContext)
  return (
    <>
    
  
    <BrowserRouter>
    
     {/* <Header car={car} /> */}
 
      
       {
         showMenu && <MenuItems/>
       }
     
      <Routes>
      <Route path="/"  element={<Layout />}>

         <Route path="/" element={<Landingpage/>} /> 
         <Route path="/home" element={<Home/>} /> 
         <Route path="/cart" element={<Cart/>} /> 
         <Route path="/about" element={<About/>} /> 
         <Route path="/stores" element={<Stores/>} /> 
         <Route path="/detail/:id"  element={<Detailed />} /> 
         </Route>
         <Route>
         <Route path="/bottle" element={<Button/>} />
         <Route path="/Login" element={<Login/>} />

         </Route>

      </Routes>
    
     </BrowserRouter>
    </>
  )
}

export default App
