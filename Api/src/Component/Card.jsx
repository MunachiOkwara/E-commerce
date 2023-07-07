import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
import { useContext, useReducer } from "react";
import { ThemeContext } from "../ContextApi/Context";



const Card =()=>{
   
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
    //  const initialState ={
   //    cartItems: []
   //  }

   //  const cartReducer = (state, action)=>{
   //      switch(action.type){
   //       case 'ADD_TO_CART':
   //          return{
   //             ...state,
   //             cartItems:[...state.cartItems,action.payload],
   //          };
   //          default: return state
   //      }
   //  }

  // console.log(data)

    const url = 'https://fakestoreapi.com/products?limit=20'

  const getMyApiData = () =>{
    axios.get(url)
    .then(res=> setData(res.data))
  }

  const {state, dispatch} = useContext(ThemeContext)
    //   fetch (url)
    //  .then(res=> res.json())
    //  .then(res=> setData(res))
    
 console.log('clicked')

 useEffect(()=>{
  getMyApiData()
 },[])


    return(
  <>
          
  
  <div className="load">
  {                                       
    data.length ? null : "Loading......"
  }
 </div>    
                
            {
       data?.map((props)=>(
        
        <div key={props.id} className="cardwrapper" style={{backgroundColor: state? 'black' : null}}>
        <div className="top">
         <img src={props.image} alt="" /></div>
    <div className="down">
      <h4 >Title:{props.title}</h4>
      <h4>Category:{props.category}</h4>
      <h4>Price:${props.price}</h4>
      <button onClick={()=>handleAddCart(props.id,props.name,props.image,props.price)}>Add Cart</button>
       <Link to= {`/detail/${props.id}`} >detail</Link>
      </div>
      </div>
        
       
           
    
        )
        )
 

       }

</>
    )
}

export default Card