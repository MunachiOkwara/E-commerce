    import { useContext } from "react"
    import { ThemeContext } from "../ContextApi/Context"
    import {ImBin} from 'react-icons/im'
    import Footer from "../Component/Footer"
    
    const Cart =() =>{

    const {state, cart, dispatch, total} =useContext(ThemeContext)
    
    const removeFromCart=(id)=>{
        dispatch({
            type: "delete",
            id: id
        })
    }
    const increaseQTY=(id)=>{
        dispatch({
            type: "increase",
            id: id
        })
    }
    const reduceQTY=(id, quantity)=>{
        dispatch({
            type: "reduce",
            id: id,
            quantity
        })
    }
console.log(total)
    return(
        <>
        <div style={{width:"100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: state? '  #68B984' : null, color: 'black'}}>
            {
            cart.length === 0? <h1 className="empty"> Cart is Empty</h1>:
                <div className="load">
                    <div className="myholder">
                    <div className="totalholder">
                    <h1 className="total" >Total-Amount: ₦{total}</h1>
                    </div>
                    </div>
                    <div style={{width: "100%",display: "flex",gap: "15px",flexWrap: "wrap",justifyContent: "center", alignItems: "center"}}>            
                        {
                        cart?.map((props)=>(
                            <div key={props.id} className="cardwrapper" >
                                <div className="top">
                                <img src={props.image} alt="" /></div>
                                <div className="down">
                                
                                {/* <h4 style={{color: 'black'}}>Title:{props.title}</h4> */}
                                <h4 style={{color: 'black'}}>Price:${props.price}</h4>
                                <h4 style={{color: 'black'}}>QTY: {props.quantity}</h4>
                                <div className="det" style={{color: "black", fontSize: 16, display: "flex", justifyContent: "center", alignItems: "center",}}>
                                    <div className="click" style={{backgroundColor: "black", color: "white", width: 30, height: 30,display: "flex", justifyContent: "center", alignItems: "center" }} onClick={()=> reduceQTY(props.id, props.quantity)}>-</div>
                                        <p>{props.quantity}</p>
                                    <div  className="onclick" style={{backgroundColor: "black", color: "white", width: 30, height: 30,display: "flex", justifyContent: "center", alignItems: "center" }} onClick={()=> increaseQTY(props.id)}>+</div>
                                    <ImBin className="delete" onClick={()=> removeFromCart(props.id)}/>
                                </div>
                               
                                </div>
                            </div> ))
                        }
                    </div> 
                </div>
            } 
        </div>
        <Footer/>
        </>
        )
    }
    export default Cart