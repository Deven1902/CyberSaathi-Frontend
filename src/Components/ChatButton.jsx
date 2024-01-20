// ChatButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const ChatButton = () => (
  <Link to="/chat" className="chat-button">
    Chat
  </Link>
);

export default ChatButton;
