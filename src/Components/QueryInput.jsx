// QueryInput.js
import React from 'react';

const QueryInput = () => (
  <div className="query-container">
    {/* Checkbox for entering a query */}
    <input type="checkbox" id="query" name="query" />
    <label htmlFor="query" className="query-label">
      Enter your query here
    </label>
  </div>
);

export default QueryInput;