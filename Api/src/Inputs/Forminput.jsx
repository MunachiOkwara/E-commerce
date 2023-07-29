import './Forminput.css'
import { useState } from 'react';
import tree from '../assets/tree.jpg'


const Forminput =(props) =>{
    const[focused,setFocused] =useState(false);
    const {label,errorMessage,onChange , id, ...inputProps} = props;
   
    const handleFocus =(e)=>{
        setFocused(true);
    };
    return(
   <div className="forminput">
    <label >{label}</label>
    <input className='inputs'
    {...inputProps} 
    onChange={onChange}
     onBlur={handleFocus} 
     onFocus={()=>
        inputProps.name==="confirmPassword" && setFocused(true) }
    focused={focused.toString()}/>
   <span>{errorMessage}</span>
   </div>
    )
}

export default Forminput