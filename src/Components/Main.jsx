// Main.js
import React from 'react';
import { Link } from 'react-router-dom';
import QueryInput from './QueryInput';
import DataDisplay from './DataDisplay';
import ChatButton from './ChatButton';

const Main = () => (
  <main>
    <div className="main-section">
      <QueryInput />
      <DataDisplay />
      <ChatButton />
    </div>
  </main>
);

export default Main;