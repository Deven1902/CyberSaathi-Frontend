import React, { useState } from 'react';

const PageComponent = () => {
  const [email, setEmail] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Screen 1</h1>
      <div style={{ display: 'flex', border: '1px solid black', padding: 20 }}>
        <div style={{ marginRight: 20 }}>
          <label>
             Enter Email
            <textarea 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{ width: 200, height: 100, margin: 10 }}
            />
          </label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: 200, height: 100, margin: 10, border:'1px solid black' }}>
            COPYRIGHT CONTENT
          </div>
          <div style={{ width: 200, height: 100, margin: 10, border:'1px solid black' }}>
            NUDITY
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageComponent;
