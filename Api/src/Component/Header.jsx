import { NavLink } from 'react-router-dom';
import Button from '../Pages/Button'
import { ThemeContext } from '../ContextApi/Context';
import Theme from '../Theme/Theme';
import { useContext } from 'react';


const Header =({car})=>{ 
   const {state,tasks} =useContext(ThemeContext); 
   console.log("From header  ",tasks) 
    return(  
        <>
        <section className="header" style={{backgroundClip: state? "black" : null}}>
<div className="imgholder">
  <h1 style={{color: state? "white" : null}}>MUNASTORE</h1>

</div>
<img className='shop' src={car} alt="car" />
<div className="invincible"></div>
<div className="text">

    <NavLink to= "/home" style={{ textDecoration:"none", color: state? "white" :null }}> <h3>Home</h3> </NavLink> 
    <NavLink to= "/cart" style={{textDecoration:'none', color: state? "white" :null}}> <h3>Cart({tasks.length})</h3> </NavLink> 
    <NavLink to= "/about" style={{textDecoration:'none', color: state? "white" :null}}> <h3>About</h3> </NavLink> 
    <NavLink to= "/stores" style={{textDecoration:'none', color: state? "white" :null }}> <h3>Stores</h3> </NavLink> 
   <div> <Theme/></div>
    
    
     
</div>
 <Button/>
</section>
 
 </>
    )
}


export default Header