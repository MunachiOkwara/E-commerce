 import {Outlet} from 'react-router-dom'
 import Header from "../Component/Header"


 export const Layout = () =>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
 }