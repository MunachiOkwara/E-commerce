import { useContext } from "react"
import { ThemeContext } from "../ContextApi/Context"

const Stores = () =>{

    const {state}= useContext(ThemeContext)
    return(
        <h3 className="stores" style={{backgroundColor: state? "  #68B984": null}}>Stores</h3>
    )
}
export default Stores