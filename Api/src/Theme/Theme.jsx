import {  useContext } from "react";
import {BsMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from '../ContextApi/Context'

const Theme = () =>{
    const { state, Toggle} = useContext(ThemeContext);
    
    return(
        <div>
            {state ? (
                <BsSunFill
                onClick={() => {
                    Toggle();
                }} 
                style={{color:"white", cursor: 'pointer'}}
                />
            ) :(
                <BsMoonFill
                onClick={() =>{
                    Toggle();
                }}
                 style={{cursor: "pointer"}}
                />
            )}
        </div>
    )
}
export default Theme ;