// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/chat.css';

// const UserChatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const trainerMessage = localStorage.getItem('trainerMessage');
//       if (trainerMessage) {
//         setMessages(prev => [...prev, { text: trainerMessage, sender: 'trainer' }]);
//         localStorage.removeItem('trainerMessage');
//       }
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (inputMessage.trim() !== '') {
//       setMessages([...messages, { text: inputMessage, sender: 'user' }]);
//       localStorage.setItem('userMessage', inputMessage);
//       setInputMessage('');
//     }
//   };

//   return (
//     <div className="chatbox-container">
//       <h1>User Chat</h1>
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
//       <Link to="/purchased">View Purchased Plans</Link>
//     </div>
//   );
// };

// export default UserChatbot;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/chat.css';

const UserChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const trainerMessage = localStorage.getItem('trainerMessage');
      if (trainerMessage) {
        setMessages(prev => [...prev, { text: trainerMessage, sender: 'trainer' }]);
        localStorage.removeItem('trainerMessage');
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      localStorage.setItem('userMessage', inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="user-chatbox-container">
      <h1>User Chat</h1>
      <div className="user-chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`user-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="user-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="user-input"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" className="user-chat-button">Send</button>
      </form>
      <Link to="/purchased">View Purchased Plans</Link>
    </div>
  );
};

export default UserChatbot;
