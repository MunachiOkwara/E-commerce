// import {NavLink, Link} from "react-router-dom"
// import {useContext, useEffect, useState} from "react"
// import { ThemeContext } from "../ContextApi/Context"
// import {GrMenu} from "react-icons/gr"
// import { logOutHelper } from "./Redux/feautures"
// // import{MenuItems} from "../components/MenuItems"
// import { useSelector, useDispatch } from "react-redux"

// const Header = () => {
//   const dispatch = useDispatch()
//   const[isLoggedIn, setisLoggedIn]= useState(JSON.parse(localStorage.getItem("ecommerceUser")))
//   const [updateUI, setUpdateUi]= useState(false)
//   // console.log(isLoggedIn.id)
//   const {theme, darkMode, lightMode, state, toggleMenu, showMenu, setWatch} = useContext(ThemeContext)
//   const amount = useSelector((state) => state.commerce.amount);
  
//   const headerStyle={
//     backgroundColor: theme === "light"? "tomato": "grey"
//   }
//   const logOut=()=>{
//     localStorage.setItem("ecommerceUser", JSON.stringify({id:"", token:"", name: ""}) )
//     dispatch(logOutHelper())
//     setUpdateUi(!updateUI)
//   }
  
  

//   return (
//     <>
//     <div className="Header">
//               <div style={{display:"flex", gap: "20px", padding: "20px", justifyContent: "space-between"}} >
//                   <div  className="HeaderContent">
//                   <NavLink to="/" onMouseEnter={()=> console.log("enter")} onMouseLeave={()=> console.log("left")}>Home</NavLink>
//                   <NavLink to="/counter" >Counter</NavLink>
//                   <NavLink to="/about" >about</NavLink>
//                   <NavLink to="/child" >child</NavLink>
//                   </div>
//                   <div style={{display: "flex", width: "200px", gap:"20px"}}>
//                   <Link to="/cart" style={{color: "black"}}>
//                     Cart({amount || 0})
//                   </Link>
//                     {
//                       theme === 'light'? <button onClick={()=> darkMode()}>Dark Mode</button>:<button onClick={()=> lightMode()}>Light Mode</button>
//                     }
//                   </div>
//                   {
//                     showMenu?  <h2 onClick={()=> toggleMenu()}>X</h2>:<GrMenu className="menu" onClick={()=> toggleMenu()}/>
//                   }
//                   {
//                     isLoggedIn.id !=="" && !updateUI? <div onClick={logOut} style={{color: "black", cursor: "pointer"}}>
//                     Logout
//                   </div>: <Link to="/login" style={{color: "black"}}>
//                   Login
//                 </Link>
//                   }
//                   {
//                     isLoggedIn.id ==="" || updateUI === true? <Link to="/signup" style={{color: "black"}}>
//                     signup
//                   </Link>: null
//                   }
//               </div>
//           </div>
          
//     </>
//   )
// }

// export default Header













import { NavLink } from 'react-router-dom';
// import Button from '../Pages/Button'
import { ThemeContext } from '../ContextApi/Context';
import Theme from '../Theme/Theme';
import { useContext, useState } from 'react';
import { MenuItems } from '../Menuitems';
import { logOutHelper } from '../Component/Redux/feautures'



const Header =({})=>{ 
  const [signOut,setSignOut] = useState(JSON.parse(localStorage.getItem("ecommerceUser")))
   const {state,cart, toggleMenu, showMenu} =useContext(ThemeContext); 
   console.log("From header  ",cart) 

   const logOut=()=>{
    localStorage.setItem("ecommerceUser", JSON.stringify({id:"", token:"", name: ""}) )
    dispatch(logOutHelper())
   }
    return(  
        <>
        <section className="header"  style={{backgroundClip: state? " #898121" : null}}>
<div className="imgholder">
  <h1 style={{color: state? " white" : null}}>MUNASTORE</h1>

</div>

<div className="invincible"></div>
<div className="text">
   {/* <div className="HeaderContent"> */}
    
    <NavLink to= "/home" style={{ textDecoration:"none", color: state? " #898121" :null }}> <h3>Home</h3> </NavLink> 

    <NavLink to= "/cart" style={{textDecoration:'none', color: state? " #898121" :null}}> <h3>Cart({cart.length})</h3> </NavLink> 

    <NavLink to= "/about" style={{textDecoration:'none', color: state? " #898121" :null}}> <h3>About</h3> </NavLink> 

    <NavLink to= "/stores" style={{textDecoration:'none', color: state? " #898121" :null }}> <h3>Stores</h3> </NavLink> 
    <Theme/>
    <NavLink to= "/bottle" > <button style={{height:"30px", width:"65px",backgroundColor:"white", color:"black", fontSize:"18px",border:"none",borderRadius:"5px"}}>SignUp</button> </NavLink> 

    <NavLink to= "/login" > <button style={{height:"30px", width:"65px",backgroundColor:"white", color:"black", fontSize:"18px",border:"none",borderRadius:"5px"}}>Login</button> </NavLink>
    <NavLink to= "/sign" > <button onClick={logOut} style={{height:"30px", width:"65px",backgroundColor:"white", color:"black", fontSize:"18px",border:"none",borderRadius:"5px"}}>SignOut</button> </NavLink>


   </div>
   
  
      
</section>

 </>
    )
}


export default Header