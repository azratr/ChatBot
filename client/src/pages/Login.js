import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { sentOtpFunction } from "../services/Apis";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/styles.css";
import chatlogo from "../assests/chatbot copy.png";


const Login = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  //send otp
  const sendOtp = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Enter Your Email!");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email!");
    } else {
      const data = {
        email: email,
      };

      const response = await sentOtpFunction(data);
      if (response.status === 200) {
        navigate("/user/otp",{state:email});
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
            <h1>Welcome to ChatBot!!</h1>
          </div>
          <form>
            <p>Please login your email id for verification</p>
            <div className="form-input">
              <label htmlFor="email">
                <h2>Email</h2>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your email id"
                />
              </label>
            </div>
            <button className="btn btn-primary" onClick={sendOtp}>
              Login
            </button>
            <p className="post">
              Don't have an account? <NavLink to="/Register">Sign up</NavLink>
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};
export default Login;
