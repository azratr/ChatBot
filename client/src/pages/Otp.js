import React, { useState } from "react";
import chatlogo from "../assests/chatbot copy.png";
import "../styles/styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { userVerify } from "../services/Apis";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your Otp");
    } else if (otp.length < 6) {
      toast.error("otp Length minimum 6 digits");
    } else {
      const data = {
        otp,
        email: location.state,
      };

      const response = await userVerify(data);
      if(response.status === 200){
        localStorage.setItem("userdbtoken",response.data.userToken);
        toast.success(response.data.message);
        setTimeout(()=>{
          navigate("/Dashboard")
        },5000)
      }else {
        toast.error(response.error);
      }
    }
  };
  return (
    <>
      <section>
        <div className="form-data">
          <div className="form-heading">
            <img src={chatlogo} alt="chatbot" />
            <h1>Please Enter Your OTP here</h1>
          </div>
          <form>
            <div className="form-input">
              <label htmlFor="otp">
                <h2>OTP</h2>
                <input
                  type="text"
                  name="otp"
                  id=""
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter Your otp here"
                />
              </label>
            </div>
            <button className="btn" onClick={LoginUser}>
              Submit
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Otp;
