// DataDisplay.js
import React from 'react';
import Card from './Card';

const DataDisplay = () => {
  // Placeholder for fetching and displaying data from the API
  return (
    <div className="data-container">
      <Card title="Card 1" imageUrl="https://example.com/image1.jpg" domain="example.com" />
      <Card title="Card 2" imageUrl="https://example.com/image2.jpg" domain="example.com" />
    </div>
  );
};

export default DataDisplay;
