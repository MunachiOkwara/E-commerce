import { useContext } from "react"
import { ThemeContext } from "../ContextApi/Context"
const About = ()=>{

    const {state}= useContext(ThemeContext)
    return(
        <>
        <div className="about" style={{backgroundColor: state? "black" : null}}>
            <div className="top"><h1 style={{fontFamily: ' Monotype Corsiva',fontSize:'40px'}}>About us</h1></div>
            <div className="down">
                <p>Our vision</p>
                <p>Reviews</p>
                <p>Ratins</p>
                <p>Our vision</p>
                </div>
        </div>
         </>
    )
}
export default About