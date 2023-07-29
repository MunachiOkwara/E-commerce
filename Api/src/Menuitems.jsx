 import {NavLink} from 'react-router-dom'
 import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './ContextApi/Context'
 export const MenuItems=()=>{
    const {state, cart} = useContext(ThemeContext)

    return(
        <div className="menuItems">
            <div className="menuContents">
             <NavLink to= "/home" style={{ textDecoration:"none", color: state? "white" :null }}> <h3>Home</h3> </NavLink> 
              <NavLink to= "/cart" style={{textDecoration:'none', color: state? "white" :null}}> <h3>Cart({cart.length})</h3> </NavLink> 
               <NavLink to= "/about" style={{textDecoration:'none', color: state? "white" :null}}> <h3>About</h3> </NavLink> 
                <NavLink to= "/stores" style={{textDecoration:'none', color: state? "white" :null }}> <h3>Stores</h3> </NavLink> 
            </div>
        </div>
    )
 }

 export default MenuItems