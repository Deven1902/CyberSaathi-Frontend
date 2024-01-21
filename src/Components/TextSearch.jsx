

import React, { useState } from 'react';

const TextSearch = () => {
  const [name, setName] = useState('');
  const [googleSearchResults, setGoogleSearchResults] = useState(null);
  const [duckDuckGoSearchResults, setDuckDuckGoSearchResults] = useState(null);
  const [yandexSearchResults, setYandexSearchResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrlGoogle = 'http://192.168.105.229:3000/api/v1/googleImagesSearch';
    const apiUrlDuckDuckGo = 'http://192.168.105.229:3000/api/v1/duckDuckGoWebSearch';
    const apiUrlYandex = 'http://192.168.105.229:3000/api/v1/yandexWebSearch';

    const searchQuery = `${name}`;

    try {
      // Google Search
      const responseGoogle = await fetch(`${apiUrlGoogle}?${searchQuery}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchQuery }),
      });

      if (responseGoogle.ok) {
        const responseDataGoogle = await responseGoogle.json();
        setGoogleSearchResults(responseDataGoogle);
      }

      // DuckDuckGo Search
      const responseDuckDuckGo = await fetch(`${apiUrlDuckDuckGo}?${searchQuery}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchQuery }),
      });

      if (responseDuckDuckGo.ok) {
        const responseDataDuckDuckGo = await responseDuckDuckGo.json();
        setDuckDuckGoSearchResults(responseDataDuckDuckGo);
      }

      // Yandex Search
      const responseYandex = await fetch(`${apiUrlYandex}?${searchQuery}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchQuery }),
      });

      if (responseYandex.ok) {
        const responseDataYandex = await responseYandex.json();
        setYandexSearchResults(responseDataYandex);
      }
    } catch (error) {
      console.error('Error posting details to API:', error);
      // Handle error as needed
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ color: '#007bff' }}>Text Search</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button
          type="submit"
          style={{
            padding: '8px',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          Submit
        </button>
      </form>

      {/* Display Google Search Results in Card Format */}
      {googleSearchResults && (
        <div>
          <h2 style={{ color: '#007bff' }}> Search Results:</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {googleSearchResults.googleWebSearchResults?.map((result, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '16px',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3>{result.title}</h3>
                <p>{result.link}</p>
                <p>{result.source}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Display DuckDuckGo Search Results in Card Format */}
      {duckDuckGoSearchResults && (
        <div>
          {/* <h2 style={{ color: '#007bff' }}>DuckDuckGo Search Results:</h2> */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {duckDuckGoSearchResults.duckDuckGoWebSearchResults?.map((result, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '16px',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3>{result.title}</h3>
                <p>{result.link}</p>
                <p>{result.source}</p>
              </div>
            ))}
          </div>
        </div>
      )}


    </div>
  );
};

export default TextSearch;

