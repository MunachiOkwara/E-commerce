import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
import { useContext, useReducer } from "react";
import { ThemeContext } from "../ContextApi/Context";
import tree from '../assets/tree.jpg'



const Card =()=>{
  const {state, dispatch} = useContext(ThemeContext)
  // const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    function handleAddCart(id,name,price,image){
      dispatch[{
          type:'Added',
          id: id,
          name: name,
          price: price,
          image: image
      }]
  }
  
  const addToCart=(id, title, price, image)=>{
    dispatch(
        {
            type: "added",
            id, title, price, image
        }
    )
  }

    const url = 'https://fakestoreapi.com/products?limit=20'

  const getMyApiData = () =>{
    axios.get(url)
    .then(res=> setData(res.data))
  }

  
    //   fetch (url)
    //  .then(res=> res.json())
    //  .then(res=> setData(res))
    
 console.log('clicked')

 useEffect(()=>{
  getMyApiData()
 },[])


    return(
  <>
          
  
  <div className="load" >
  
 
  {                                       
    data.length ? null : "Loading......"
  }
 </div>    
                
            {
       data?.map((props)=>(
        
        <div key={props.id} className="cardwrapper" >
           
        <div className="top">
         <img src={props.image} alt="" /></div>
    <div className="down">
      <h4 >Title:{props.title}</h4>
      <h4>Category:{props.category}</h4>
      <h4>Price:${props.price}</h4>
      
      <button onClick={()=>addToCart(props.id,props.title,props.price,props.image)}>Add Cart</button>
       <Link className="link" to= {`/detail/${props.id}`} >detail</Link>
      </div>
      {/* <img src={tree} alt="tree"></img> */}
      </div>
        
        
           
    
        )
        )
 

       }

</>
    )
}

export default Card