 import { ThemeContext } from "../ContextApi/Context";
 import { useContext, useState } from "react"
import Forminput from "../Inputs/Forminput"
import {useNavigate } from 'react-router-dom'
import axios from 'axios'

// import { ThemeContext } from "../ContextApi/Context";
//  import "./Forminput.css"
 const Button =()=>{
  const navigate = useNavigate();
  
  // const [load, setLoad] = useState(false)
    const {state } = useContext(ThemeContext);
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
       
    });

    const inputs = [
        {
          id: 1,  
          name:"username",
          type:"text",
          placeholder:"Username",
          errorMessage:"Username sholud be 3-16 characters and shouldn't include any special character! ",
          label:"Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true
        },
        {
          id: 2,  
          name:"email",
          type:"email",
          placeholder:"Email",
          errorMessage:"It should be a valid email address!",
          label:"Email",
          required: true
        },
        {
          id: 3,  
          name:"birthday",
          type:"date",
          placeholder:"Birthday",
          label:"Birthday"
        },
        {
          id: 4,  
          name:"password",
          type:"password",
          placeholder:"Password",
          errorMessage:"Password should be 3-10 characters and include at least 1 letter and 1 number!",
          label:"Password",
          // pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.)`,
          required: true
        },
        {
          id: 5,  
          name:"confirmPassword",
          type:"password",
          placeholder:"Confirm Password",
          errorMessage:"Passwords don't match!",
          label:"Confirm Pssword",
          pattern:values.password,
          required: true
        },
    ];
    
    const onChange =(e)=>{
      setValues({...values,[e.target.name]:e.target.value});
   };

     const handleSubmit =async(e) =>{
        e.preventDefault();
        try{
          // setLoad(true)
          const{username, email, password}= values
          const api = 'https://eflexshop.onrender.com/user/register'
          const res = await axios.post(api,{name: username, email: email, password: password});
          console.log(res)
          // setLoad(false)
          navigate("/")
        }catch(err){
          setValues({
            username: "",
            email: "",
            birthday: "",
            password: "",
            confirmPassword: "",
          })
          // setLoad(false)
          console.log(err)
        }
     };

     const takeMeHome=()=>{
        navigate ("/")
     }

    

     console.log(values)
     return(
        // <button className="bottle">SignUp<input type="checkbox"  />
     <>
          <div style={{backgroundColor: state? "  #68B984" : "null" }} className="display"  > 
        <form onSubmit={handleSubmit}>
     <h1>Register</h1>
      {inputs.map((input) => (
         <Forminput
          key={input.id} 
          {...input} 
          value={values[input.name]}
          onChange={onChange}
          />
      ))}
       
       <button className="submit" onClick={takeMeHome}>Sign Up</button>
       </form>
        </div>
        </>
        // </button>
     )
 }
 export default Button