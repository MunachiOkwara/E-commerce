import "./component.css"
import { useState } from "react"

const Footer = ()=>{


    const [data, setData] = useState([]);
    const [createlist, setCreateList] =useState("");
   
    const Update= ()=>{
     if (createlist !== "") {
       setData((prev) => [...prev,{
        id: data.length,
        CreateList: createlist,
       }])
       setCreateList("")
       alert(` suscribtion successful : ${createlist}`)
     } else {
       alert("Add Email") 
     }
    }
    return(
 <>
  <div className="mainf">
  <div className="topfot" >
  <div className="high"> <h2 style={{fontFamily:' Monotype Corsiva',fontSize:'30px',color:'white'}}>MUNASTORE</h2></div>
  <div className="mid">
  <div className="textt">
  <h3 style={{fontFamily:'monospace',color:'white'}}>NEW TO MUNA'S STORE?</h3>
  <p style={{fontFamily:'sansarif',color:'white',fontSize:'15px'}}>Suscribe to our news letter to get the latest offers!</p>
  </div>
  <div className="cont">
 <input type="email" placeholder="  Enter- Email- Address" value={createlist} style={{height:'40px',border:'none',borderRadius:'5% 0 0 5%'}} onChange={(e)=> setCreateList(e.target.value)} />
  <button onClick={Update} style={{height:'40px', width:'90px',border:'none',background:'#898121',borderRadius:'0 5% 5% 0',cursor:'pointer', fontSize:'15px',fontFamily:'monospace'}}>Search</button>
  </div>
  </div>
  <div className="low">
          <h3 style={{fontFamily:'monospace',color:'white'}}>Get access to exclusive offers!</h3>
          <p style={{fontFamily:'sansarif',color:'white',fontSize:"15px"}}>Get latest deals</p>
          <div className="loww">
          <button style={{height: "30px",width:"100px",background:"#4C4B16",color:"white",border:"1px solid white",borderRadius:"5px", cursor:'pointer'}}>App Store</button> <button style={{height: "30px",width:"100px",background:"#4C4B16",color:"white",border:"1px solid white",borderRadius:"5px", cursor:"pointer"}}>Google Play</button>
          </div>
          
        </div>
    </div>
    <div className="downfot">
        <div className="first">
         <div style={{display:"flex", flexDirection:"column",gap:"5px"}}>
         <h2  style={{fontFamily:'monospace',color:'white'}}>Need Help</h2>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>How to shop</p>
          <p>delivery options and timeline</p>
          <p>How to return a product </p>
          <p>Corporate and bulk purchases</p>
          <p>Report a Product</p>
          <p>ship your package anywhere in Nigeria</p>
         </div>
        </div>
        <div className="second">
        <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
        <h2  style={{fontFamily:'monospace',color:'white'}}>About Muna's Store</h2>
          <p>About us</p>
          <p>Muna's Store Careers</p>
          <p>Muna's Store Express</p>
          <p>Terms and Conditions</p>
          <p>Privacy </p>
          <p>Muna's Store Credit Terms & Conditins</p>
          <p>Muna's Store Payment Information</p>
          <p>ship your package anywhere in Nigeria</p>
        </div>
        </div>
        <div className="third">
        <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
        <h2  style={{fontFamily:'monospace',color:'white'}}>Make Money With Muna's Store</h2>
          <p> Sell On Muna's Store</p>
          <p>Become a Logistics Service </p>
          <p>Become a Sales Consultant</p>
          <p>Join the Muna's Store DA Academy</p>
          <p>Join the Muna's Store KOL Program </p>
        </div>
        </div>
    </div>
  </div>
 </>
    )
}
export default Footer