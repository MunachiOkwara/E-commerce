import { ThemeContext } from "../ContextApi/Context";
import { useContext, useEffect, useState } from "react";
import Forminput from "../Inputs/Forminput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginHelper } from "../Component/Redux/feautures";

const Login = () => {
  const { user } = useSelector((state) => state.commerce);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const { state } = useContext(ThemeContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      //   errorMessage:"It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      //   errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      //   pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.)`,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoad(true);
      const { email, password } = values;
      const api = "https://eflexshop.onrender.com/user/login";
      const res = await axios.post(api, { email: email, password: password });
      const user = res.data.data;
      localStorage.setItem(
        "ecommerceUser",
        JSON.stringify({ id: user._id, token: user.token, name: user.name })
      );
      // console.log({name: username, email: email, password: password})
      dispatch(
        loginHelper({ id: user._id, token: user.token, name: user.name })
      );
      setLoad(false);
      console.log(res);
      navigate("/");
      // console.log(res)
      // setLoad(false)
      // navigate("/login")
    } catch (err) {
      setValues({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
      });
      setLoad(false);
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(values);
  }, [load]);

  return (
    // <button className="bottle">SignUp<input type="checkbox"  />
    <>
      <div
        style={{ backgroundColor: state ? "  #68B984" : "null" }}
        className="display"
      >
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

          <button disabled={load} className="submit" onClick={ ()=>navigate("/")}>
            Submit
          </button>
        </form>
      </div>
    </>
    // </button>
  );
};

export default Login;
