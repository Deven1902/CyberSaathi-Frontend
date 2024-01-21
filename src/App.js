import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import './App.css'; // Import the stylesheet'
import NotFound from './Components/404';
import Screen2 from './Components/ScreenTwo.jsx'
import FirstScreen from './Components/FirstScreen';
import ScreenTwo from './Components/ScreenTwo';
import ScreenThree from './Components/ScreenThree.jsx';
import ScreenFour from './Components/ScreenFour.jsx';
import EmailTemplate from './Components/email.js';
import HeroSection from './Components/hero.jsx';
import Footer from './Components/Footer.jsx';
import QueryPage from './Components/QueryPage.jsx'; 
import ChatBot from './Components/ChatBot.js'; 
import ImageSearch from './Components/ImageSearch.jsx';
import Navbar from './Components/Navbar.jsx';
import TextSearch from './CardComponents';


const App = () => (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/past-applications" element={<PastApplications />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/" element={<MainContent />} />
      <Route path="/firstscreen" element={<ScreenTwo />} />
      <Route path="/SecondScreen" element={<FirstScreen />} />
      <Route path="/ThirdScreen" element={<ScreenThree />} />
      <Route path="/FourthScreen" element={<ScreenFour />} />
      <Route path="/QueryPage" element={<QueryPage />} />
      <Route path="/ChatBot" element={<ChatBot />} />
      <Route path="/ImageSearch" element={<ImageSearch />} />
      <Route path="/TextSearch" element={<TextSearch />} />
      <Route path="/" element={<NotFound />} />

    </Routes>
  </div>
);

const Header = () => (
  <header>
    <Link to="/firstscreen">First  </Link>
    <Link to="/SecondScreen">Second  </Link>
    <Link to="/ThirdScreen">Third  </Link>
    <Link to="/FourthScreen">Fourth  </Link>
    <Link to="/QueryPage">VectorSearch  </Link>
    <Link to="ChatBot">ChatBot  </Link>
  </header>
);

const MainContent = () => (
  <main>
    {/* <div className="query-section">
      <QueryInput />
    </div>
    <DataDisplay />
    <ChatButton /> */}
    
    {/* <Navbar/> */}
    <HeroSection/>
    {/* <EmailTemplate/> */}
    <Footer/>
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


// import React from 'react';
// import { Route, Link, Routes } from 'react-router-dom';
// import './App.css'; // Import the stylesheet
// import Screen2 from './Components/Screen2.jsx'
// import FirstScreen from './Components/FirstScreen';
// import EmailTemplate from './Components/email';




// const App = () => (
//   <div className="container">
//     <Header />
//     <Routes>
//       <Route path="/past-applications" element={<PastApplications />} />
//       <Route path="/chat" element={<Chat />} />
//       <Route path="/" element={<MainContent />} />
//     </Routes>
    
//   </div>
// );

// const Header = () => (
//   <header>
//     <Link to="/past-applications">Past Applications</Link>
//     <Link to="/screen2">Screen 1</Link>
//     <Link to="/firstscreen">First screen</Link>
//   </header>
// );

// const MainContent = () => (
//   <main>
//     <div className="query-section">
//       <QueryInput />
//     </div>
//     <DataDisplay />
//     <ChatButton />
//   </main>
// );

// const QueryInput = () => (
//   <div>
//        <h3>Enter your query here</h3>
//     <input type="textbox" id="query" name="query" />
//     <label htmlFor="query" className="query-label">
      
//     </label>
//   </div>
// );

// const DataDisplay = () => (
//   <div className="data-display">
//     <CardComponent title="Card 1" data="Some data for Card 1" />
//     <CardComponent title="Card 2" data="Some data for Card 2" />
//   </div>
// );

// const CardComponent = ({ title, data }) => (
//   <div className="card">
//     <h3>{title}</h3>
//     <p>{data}</p>
//   </div>
// );

// const ChatButton = () => (
//   <div className="chat-button">
//     <Link to="/chat">Chat</Link>
//   </div>
// );

// const PastApplications = () => (
//   <div>
//     <h2>Past Applications</h2>
//   </div>
// );

// const Chat = () => (
//   <div>
//     <h2>Chat</h2>
//   </div>
// );

// export default App;
