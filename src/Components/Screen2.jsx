import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const PageComponent = () => {
  const [email, setEmail] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 style={{ color: 'white' }}>Screen 1</h1>
      
      <div style={{ display: 'flex', border: '1px solid black', padding: 20 }}>
        <div style={{ marginRight: 20 }}>
          <label>
             Enter Email
            <textarea 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{ width: 200, height: 100, margin: 10, color: 'white' }}
            />
          </label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{ width: 400, height: 400, margin: 10, border:'1px solid black', color: 'white' }}>
            COPYRIGHT CONTENT
          </div>
          <div style={{ width: 400, height: 400, margin: 10, border:'1px solid black', color: 'white' }}>
            NUDITY
          </div>
        </div>
      </div>
      <Button style={{ width: '200px', height: '50px', fontSize: '16px' }}>Click me</Button>
    </div>
  );
};

export default PageComponent;
