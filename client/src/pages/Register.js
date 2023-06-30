import React, { useState } from "react";
import "../styles/styles.css";
import { toast, ToastContainer } from "react-toastify";
import chatlogo from "../assests/chatbot copy.png";
import { registerfunction } from "../services/Apis";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [inputdata, setInputdata] = useState({
    fname: "",
    email: " ",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  //register data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, password } = inputdata;

   if (fname === "") {
      toast.error("Enter Your Name");
    } else if (email === "") {
      toast.error("Enter Valid Email");
    } else if (password === "") {
      toast.error("Enter Your Password");
    } else if (password.length < 6) {
      toast.error("password length minimum 6 character");
    } else {
      const response = await registerfunction(inputdata);

      if (response.status === 200) {
        setInputdata({ ...inputdata, fname: "", email: "", password });
        navigate("/");
      } else {
        toast.error(response);
      }
    }
  };

   return (
    <>
      <section>
        <div className="form-data">
          <div className="form-heading">
            <img src={chatlogo} alt="chatbot" />
            <h1>ChatBot Sign up!</h1>
          </div>
          <form>
            <p>Enter your details below for signup</p>
            <div className="form-input">
              <label>
                <h2>Name</h2>
                <input
                  type="text"
                  name="fname"
                  
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />
              </label>
              <label>
                <h2>Email</h2>
                <input
                  type="email"
                  name="email"
                  
                  onChange={handleChange}
                  placeholder="Enter Your email id"
                />
              </label>
              <label>
                <h2>Password</h2>
                <input
                  type="password"
                  name="password"
                  
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                />
              </label>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Sign up
            </button>
            <p className="post">Already have an account?<NavLink to={'/'}>Login</NavLink> </p>
          </form>
        </div>
      </section>

      <ToastContainer />
    </>
  );
   }  
export default Register;
