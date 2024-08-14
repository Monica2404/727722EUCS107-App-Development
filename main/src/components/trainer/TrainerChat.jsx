

// // TrainerChatbot.js
// import React, { useState, useEffect } from 'react';
// import '../../assets/css/chat.css';

// const TrainerChatbox = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const userMessage = localStorage.getItem('userMessage');
//       if (userMessage) {
//         setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
//         localStorage.removeItem('userMessage');
//       }
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (inputMessage.trim() !== '') {
//       setMessages([...messages, { text: inputMessage, sender: 'trainer' }]);
//       localStorage.setItem('trainerMessage', inputMessage);
//       setInputMessage('');
//     }
//   };

//   return (
//     <div className="chatbox-container">
//       <h1>Trainer Chat</h1>
//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSendMessage}>
//         <input
//           type="text"
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default TrainerChatbox;

import React, { useState, useEffect } from 'react';
import '../../assets/css/chat.css';

const TrainerChatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const userMessage = localStorage.getItem('userMessage');
      if (userMessage) {
        setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
        localStorage.removeItem('userMessage');
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'trainer' }]);
      localStorage.setItem('trainerMessage', inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="trainer-chatbox-container">
      <h1>Trainer Chat</h1>
      <div className="trainer-chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`trainer-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="trainer-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="trainer-input"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" className="trainer-chat-button">Send</button>
      </form>
    </div>
  );
};

export default TrainerChatbox;
