import { useState, useEffect } from "react"
import axios from 'axios'
import{BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs"
import {AiOutlineReload} from "react-icons/ai"
// import { useContext } from "react"
// import { ThemeContext } from "../ContextApi/Context"
// import { useParams } from "react-router-dom"
const Ui =()=>{
   const [data, setData] =useState([]);
   const [count, setCount] =useState(0)
//    const {ld}= useParams()
//    console.log(id)
// console.log(data)
   
 const NewData = data.slice(1,8)
 
 const AddCount = ()=>{
    setCount(count + 1)
 }

  const Ui = () =>{
    if(count <= 0){
        setCount(0)
    }else{
        setCount(count -1)
    }
  }
 
  

//   console.log(NewData[count % NewData.length])
//   console.log(count)


    const GetAllData = () => {
 const url ='https://fakestoreapi.com/products'
        axios.get(url)
        .then(res => setData (res.data))
        // fetch(url)
        // .then(res=> res.json())
        // .then(res=> setData(res))
    }
        
    
    useEffect(()=>{
        GetAllData()
        // interval()
        setInterval(()=> {
            setCount(count=> count+=1)
        }, 3000)

    },[])

    console.log(NewData)
    // const {state} = useContext(ThemeContext)

    return(
         <>
    
         
  
 <div className="ui">
  <div className="leftui">
  <div className="bigtext"><h1>Title:{NewData[count % NewData.length]?.title}</h1></div>
  <div className="smalltext"><h3>Description:{NewData[count % NewData.length]?.description}</h3></div>
  <div className="button"><button>SHOP NOW</button></div>
  </div>
  <div className="rightui">
  <div className="pic">
    {
    data.length ? null : <div className="loadd"><AiOutlineReload style={{width:'50px',height:'50%'}}/></div>
    }
    <img src= {NewData[count % NewData.length]?.image} alt="" /></div>
    <div className="arrow">
    <div className="leftarrow"><BsFillArrowLeftCircleFill onClick={Ui}/></div>
    <div className="leftarrow"> <BsFillArrowRightCircleFill onClick={AddCount}/></div>
    </div>
    </div>
    </div>

            
        
         </>
    )
}
export default Ui
