// import React, { useState } from "react";
// import "./ChatBot.css"; // Import your CSS file for styling

// const ChatBot = () => {
//   const [inputMessage, setInputMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [error, setError] = useState(null);

//   const handleInputChange = (e) => {
//     setInputMessage(e.target.value);
//   };

//   const handleApiCall = async () => {
//     try {
//       const response = await fetch("http://192.168.105.27:8000/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ question: inputMessage }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const responseData = await response.json();
//       setChatHistory((prevHistory) => [
//         ...prevHistory,
//         { question: inputMessage, response: responseData.result },
//       ]);
//       setError(null);
//     } catch (error) {
//       console.error("Error making POST request:", error);
//       setError("Failed to process the request.");
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chat-history">
//         {chatHistory.map((entry, index) => (
//           <div key={index} className="chat-entry">
//             <span className="user-message">You: {entry.question}</span>
//             <span className="bot-message">Bot: {entry.response}</span>
//           </div>
//         ))}
//       </div>
//       <div className="user-input">
//         <input
//           type="text"
//           value={inputMessage}
//           onChange={handleInputChange}
//           placeholder="Type your message..."
//           className="input-field"
//         />
//         <button onClick={handleApiCall} className="send-button">
//           Send
//         </button>
//       </div>
//       {error && (
//         <div className="error-message">
//           <h2>Error:</h2>
//           <p>{error}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;

// ChatBot.js

import React, { useState } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [error, setError] = useState(null);

  const callApi = async () => {
    try {
      const response = await fetch("http://192.168.105.27:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: inputMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { message: inputMessage, type: "user" },
        { message: `Bot: ${responseData.result}`, type: "bot" },
      ]);
      setInputMessage("");
      setError(null);
    } catch (error) {
      console.error("Error making POST request:", error);
      setError("Failed to process the request.");
    }
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") {
      setError("Please enter a message.");
      return;
    }

    // Add your API call logic here
    callApi();
  };

  return (
    <div className="chatbot-fullscreen">
      <ul className="chat-history">
        {chatHistory.map((entry, index) => (
          <li key={index} className="message-wrapper">
            <div
              className={entry.type === "user" ? "user-message" : "bot-message"}
            >
              {entry.message}
            </div>
          </li>
        ))}
      </ul>
      <div className="user-input">
        <input
          type="text"
          className="input-field"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ChatBot;