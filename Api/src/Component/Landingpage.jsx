import Ui from "./Ui"
import Card from "./Card"
import Footer from "./Footer"
import { useContext } from "react"
import { ThemeContext } from "../ContextApi/Context"

 const Landingpage =()=>{

    const {state} = useContext(ThemeContext)
   
    // console.log("From Landingpage",tasks)

    
    return(
        <>

<main className="mainbody" style={{backgroundColor: state? "black" : null }} >
        <Ui/>
        <div className="card" >
            <Card/>
            
        </div>
        <Footer/>
        </main>
</>
    )
 }

 export default Landingpage