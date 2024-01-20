// Card.js
import React from 'react';

const Card = ({ title, imageUrl, domain }) => (
  <div className="card">
    <img src={imageUrl} alt={title} className="card-image" />
    <p className="card-info">{domain}</p>
  </div>
);

export default Card;
