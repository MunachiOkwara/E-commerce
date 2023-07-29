import { useState, useContext, useEffect } from "react"
import FormInput from "../components/FormInput"
import { useNavigate } from "react-router-dom"
import "./SignUp.css"
import axios from "axios"
import {loginHelper} from "../Redux/feautures"
import { useSelector, useDispatch } from "react-redux"
import { ThemeContext } from "../Context/ThemeContext"

const LoginForm = () => {;
    const {user} = useSelector(state=>state.commerce)
    const dispatch = useDispatch()
    console.log(user)
    const {watch, setWatch}= useContext(ThemeContext)
    const navigate = useNavigate()
    const [load,  setLoad]= useState(false)
    const [values, setValues]= useState({
        email: "",
        password: "",
    })

    const inputs =[
        {
            id: 1,
            name: "email",
            type: "text",
            placeholder: "email",
            errorMessage: " use valid mail",
            label:"Email",
            pattern: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}',
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "text",
            placeholder: "password",
            errorMessage: "password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character and uppercase letter",
            label:"Password",
            pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        },
    ]

    const onChange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            setLoad(true)
            const {email, password}= values
            const api = "https://eflexshop.onrender.com/user/login"
            const res = await axios.post(api,{email: email, password: password});
            const user = res.data.data
            localStorage.setItem("ecommerceUser", JSON.stringify({id:user._id, token: user.token, name: user.name}))
            // console.log({name: username, email: email, password: password})
            dispatch(loginHelper({id:user._id, token: user.token, name: user.name}))
            setLoad(false)
            navigate("/")
        }catch(err){
            setValues({
                username: "",
                email: "",
                password: "",
                confirm: ""
            })
            setLoad(false)
            console.error(err)
        }
    }

    useEffect(()=>{
        console.log(watch)
    }, [load])

  return (
    <div className="LoginForm">
         <form onSubmit={handleSubmit}>
            {
                inputs.map((e)=>(
                    <FormInput key={e.id} {...e} value={values[inputs.name]} onChange={onChange}/> 
                ))
            }
            <button disabled={load}>Login</button>
            
        </form>
        <button onClick={ ()=>navigate("/")}>Home</button>
    </div>
  )
}

export default LoginForm