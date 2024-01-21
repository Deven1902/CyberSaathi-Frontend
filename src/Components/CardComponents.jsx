// SearchResultCard.js
import React from 'react';

const CardComponents = ({ title, data }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', margin: '16px', padding: '16px', width: '300px', overflow: 'hidden' }}>
      <h3>{title}</h3>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} style={{ marginBottom: '12px' }}>
            <h4>{item.title}</h4>
            <p>URL: <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>
            <p>Source: {item.source}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};



export default CardComponents;
