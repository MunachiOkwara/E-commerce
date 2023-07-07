    import { useContext } from "react"
    import { ThemeContext } from "../ContextApi/Context"
    
    const Cart =() =>{

        const {state} =useContext(ThemeContext)
        return(
            <h3 className="cart" style={{backgroundColor: state? "black": null}}> CART</h3>
        )
    }
    export default Cart