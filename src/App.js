import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import './App.css'; // Import the stylesheet'
import NotFound from './Components/404';

const App = () => (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/past-applications" element={<PastApplications />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/" element={<MainContent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

const Header = () => (
  <header>
    <Link to="/past-applications">Past Applications</Link>
  </header>
);

const MainContent = () => (
  <main>
    <div className="query-section">
      <QueryInput />
    </div>
    <DataDisplay />
    <ChatButton />
  </main>
);

const QueryInput = () => (
  <div>
       <h3>Enter your query here</h3>
    <input type="textbox" id="query" name="query" />
    <label htmlFor="query" className="query-label">
      
    </label>
  </div>
);

const DataDisplay = () => (
  <div className="data-display">
    <CardComponent title="Card 1" data="Some data for Card 1" />
    <CardComponent title="Card 2" data="Some data for Card 2" />
  </div>
);

const CardComponent = ({ title, data }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{data}</p>
  </div>
);

const ChatButton = () => (
  <div className="chat-button">
    <Link to="/chat">Chat</Link>
  </div>
);

const PastApplications = () => (
  <div>
    <h2>Past Applications</h2>
  </div>
);

const Chat = () => (
  <div>
    <h2>Chat</h2>
  </div>
);

export default App;
