import React from 'react';
import { Link } from 'react-router-dom';
import './FirstScreen.css';

const FirstScreen = () => {
  return (
    <div className="container">
      <h1 className="heading">Welcome to the First Screen</h1>
      <div className="content">
        <div className="searchOption">
          <Link to="/search-by-text" className="link">
            <div className="searchDiv">
              Search by Text
            </div>
          </Link>
        </div>
        <div className="searchOption">
          <Link to="/search-by-image" className="link">
            <div className="searchDiv">
              Search by Image
            </div>
          </Link>
        </div>
        <div className="dummyImage">
          <img src="https://via.placeholder.com/150" alt="Dummy" className="image" />
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
