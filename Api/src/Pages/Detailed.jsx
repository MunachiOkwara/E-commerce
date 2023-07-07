import { useState,useEffect, useReducer } from "react"
import { useParams } from "react-router-dom"
import axios from "axios" 
import './page.css'
import{TbCurrencyNaira} from 'react-icons/tb'
import { useContext } from "react"
import { ThemeContext } from "../ContextApi/Context"
        
const Detailed = ()=>{
                                             
    const [data, setData] = useState({});
    const {id}= useParams();
    // function handleAddCart(id,name,price,image){
    //     dispatch[{
    //         type:'Added',
    //         id: id,
    //         name: name,
    //         price: price,
    //         image: image
    //     }]
    // }

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
    
//     useEffect(()=>{
//         fetch(`https://fakestoreapi.com/products/${id}`)
//             .then(res=>res.json())
//             .then(res=>setData(res))
//     },[])

//     const[data, setData]=useState({});
//     const {id} =useParams();

//  const url=`https://fakestoreapi.com/products/${id}`
// const [state, dispatch] =useReducer(cartReducer, initialState)
const url = `https://fakestoreapi.com/products/${id}`

  let getEachData=()=>{
     axios.get(url)
     .then(res=> setData(res.data))
  }
                     
    // useEffect= (()=>{
    //     // axios.get(`https://fakestoreapi.com/products/${id}`)
    //     // .then(res=> setData(res.json))
    //   getEachData()
    // }, [])

    // const addToCart =(item)=>{
    //   dispatch({
    //      type: 'ADD TO CART',
    //      payload: item
    //   }
    //   )
    // }

//   const cartdata=state.cartItems.map(()=>data(console.log(data)))

    useEffect(() => {
        getEachData();
    }, [])
 const {state,dispatch} = useContext(ThemeContext)

    return(
 <>
<div className="view"key={data.id} style={{backgroundColor: state? "black" : null}}>
    <h1 style={{fontFamily: "sansarif",fontSize:'30px',color:'rgb(6, 9, 48)',textDecoration:'underline'}}>Item {id} details</h1>
    <div className="bigview">
        <div className="viewleft"><img src={data.image} alt="image" style={{objectFit:'contain',height:'100%',width:'100%',}} /></div>
        <div className="viewright">
           <div className="tops">
            <h2 style={{fontSize:'15px', fontFamily:'monospace'}}>Title: {data.title}</h2>
            <button style={{height:'35px',width:'300px',background:' rgb(6, 9, 48)',border:'none',color:'white',fontSize:'15px',cursor:'pointer'}}>Add to cart</button>
           </div>
           <div className="middles">
            <h2 style={{fontSize:'15px',fontFamily:'monospace'}}>Price:<TbCurrencyNaira style={{height:'20px',width:'20px'}}/>{data.price}</h2>
            <h4 style={{fontFamily:'monospace'}}>Category: {data.category}</h4>
           </div>
           <div className="downs">
            <h2 style={{fontSize:'13px',fontFamily:'monospace',fontWeight:'200'}}>Description: {data.description}</h2>
           </div>
        </div>
    </div>
 </div>
 </>
    )
}
export default Detailed;