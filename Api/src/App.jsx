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
// import { useContext} from 'react';
// import { ThemeContext } from './ContextApi/Context';



function App({}) {


  // const state = useContext(ThemeContext)
  return (
    <>
    
  
    <BrowserRouter>
    
     <Header car={car} />
     
     
      <Routes>
         <Route path="/" element={<Landingpage/>} /> 
         <Route path="/home" element={<Home/>} /> 
         <Route path="/cart" element={<Cart/>} /> 
         <Route path="/about" element={<About/>} /> 
         <Route path="/stores" element={<Stores/>} /> 
         <Route path="/detail/:id"  element={<Detailed />} /> 
             
      </Routes>
    
     </BrowserRouter>
    </>
  )
}

export default App
