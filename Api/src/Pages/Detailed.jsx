import { useState,useEffect, useReducer } from "react"
import { useParams } from "react-router-dom"
import axios from "axios" 
import './page.css'
import { useContext } from "react"
import { ThemeContext } from "../ContextApi/Context"
import Footer from "../Component/Footer"
        
const Detailed = ()=>{
    const {state,dispatch, cart} = useContext(ThemeContext)                                       
    const [data, setData] = useState({});
    const {id}= useParams();
    
const url = `https://fakestoreapi.com/products/${id}`

  let getEachData=()=>{
     axios.get(url)
     .then(res=> setData(res.data))
  }

  const addToCart=(id, title, price, image)=>{
    dispatch(
        {
            type: "added",
            id, title, price, image
        }
    )
  }
                     

    useEffect(() => {
        getEachData();
    }, [])
    

    return(
 <>
<div className="view"key={data.id} style={{backgroundColor: state? "  #68B984" : null}}>
    <h1 style={{fontFamily: "sansarif",fontSize:'35px',color:'#4C4B16', textShadow:"3px 3px white"}}>Buy Now</h1>
    <div className="bigview">
        <div className="viewleft"><img src={data.image} alt="image" style={{objectFit:'contain',height:'100%',width:'100%',}} /></div>
        <div className="viewright">
           <div className="tops">
            <h2 style={{fontSize:'15px', fontFamily:'monospace'}}>Title: {data.title}</h2>
            <button style={{height:'35px',width:'300px',background:' #4C4B16',border:'none',color:'white',fontSize:'15px',cursor:'pointer'}} onClick={()=> addToCart(data.id, data.title, data.price, data.image)}>Add to cart</button>
           </div>
           <div className="middles">
            <h2 style={{fontSize:'15px',fontFamily:'monospace'}}>Price: ₦{data.price}</h2>
            <h4 style={{fontFamily:'monospace'}}>Category: {data.category}</h4>
           </div>
           <div className="downs">
            <h2 style={{fontSize:'13px',fontFamily:'monospace',fontWeight:'200'}}>Description: {data.description}</h2>
           </div>
        </div>
    </div>
 </div>
 <Footer/>
 </>
    )
}
export default Detailed;