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
    <div className="image-search-container">
      <h1>Text Search</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="styled-input"
        />

        <button type="submit" className="styled-button">
          Submit
        </button>
      </form>

      {/* Display or use the results as needed in your application */}
      {googleSearchResults && (
        <div>
          <h2>Google Search Results:</h2>
          <pre>{JSON.stringify(googleSearchResults, null, 2)}</pre>
        </div>
      )}
      {duckDuckGoSearchResults && (
        <div>
          <h2>DuckDuckGo Search Results:</h2>
          <pre>{JSON.stringify(duckDuckGoSearchResults, null, 2)}</pre>
        </div>
      )}
      {yandexSearchResults && (
        <div>
          <h2>Yandex Search Results:</h2>
          <pre>{JSON.stringify(yandexSearchResults, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TextSearch;