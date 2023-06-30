import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { analyze } from "../utilis";
const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hi, May I have your name?",
    },
  ]);

  const [text, setText] = useState("");
  
  
  const onSend = () => {
    let list = [...messages, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];
     

    } else {
      list = [
        ...list,
        {
          message: `Hi, ${text}`,
        },
        {
          message: "How can I help you?",
        }
       
      ];
    }
    setMessages(list);
    setText("");
    setTimeout(() => {
      document.querySelector("#copyright").scrollIntoView();
    }, 1);
    
  };
  return (
    <div className="chat-message">
      {messages.length > 0 && messages.map((data) => <ChatMessage {...data} />)}
      <div className="d-flex mt-2">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" className="btn btn-primary ms-3" onClick={onSend}>
          Send
        </button>
        
      </div>
      <div id="copyright" className="mt-3">
        copyrights reserved azra tr
      </div>
    </div>
  );
};

export default Chatbot;
