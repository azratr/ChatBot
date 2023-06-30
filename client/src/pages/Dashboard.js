import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import chatlogo from '../assests/chatbot copy.png'
import '../styles/styles.css'

import ChatBot from '../components/chatbot'
import 'bootstrap/dist/css/bootstrap.min.css'


const Dashboard = () => {
 
  const navigate =useNavigate();

  const userValid =() =>{
    let token =localStorage.getItem("userdbtoken");
    if(token){
      console.log("user Valid");
    }else{
      navigate("*");
    }
  }

  useEffect(()=>{
    userValid()
  })
 




  return (
    <>
    
      <section>
        <div className="form-data">
          <div className="form-heading">
            <img src={chatlogo} alt="chatbot" />
            <h1>Welcome to ChatBot!!</h1>
          </div>
        </div>
       
      </section>
      <ChatBot/>
      
            

           
      
      
      
    </>
    

  )
}

export default Dashboard;