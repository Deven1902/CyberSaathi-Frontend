import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Form, Button } from 'react-bootstrap';

const ScreenFour = () => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [loading, setLoading] = useState(false);
  const [googleData, setGoogleData] = useState([]);
  const [duckDuckGoData, setDuckDuckGoData] = useState([]);
  const [yandexData, setYandexData] = useState([]);

  const handleSearch = () => {
    // Update the localStorage with the search query
    localStorage.setItem('searchQuery', searchQuery);

    // Example API URLs, replace with your actual URLs
    const googleApiUrl = 'http://localhost:3000/api/v1/googleWebSearch';
    const duckDuckGoApiUrl = 'http://localhost:3000/api/v1/duckDuckGoWebSearch';
    const yandexApiUrl = 'http://localhost:3000/api/v1/yandexWebSearch';

    setLoading(true);

    // 1) Google Web Search API Call
    fetch(googleApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchQuery }),
    })

      .then((response) => response.json())
      .then((data) => setGoogleData(data))
      .catch((error) => console.error('Error fetching Google data:', error));

    // 2) DuckDuckGo Web Search API Call
    fetch(duckDuckGoApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchQuery }),
    })
      .then((response) => response.json())
      .then((data) => setDuckDuckGoData(data))
      .catch((error) => console.error('Error fetching DuckDuckGo data:', error));

    // 3) Yandex Web Search API Call
    fetch(yandexApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchQuery }),
    })
      .then((response) => response.json())
      .then((data) => setYandexData(data))
      .catch((error) => console.error('Error fetching Yandex data:', error))
      .finally(() => setLoading(false));
  };

  return (
    <Container className="custom-container">
      <h1 className="heading">Screen Four</h1>
      <Row>
        <Col md={12}>
          <Form>
            <Form.Group controlId="formSearchQuery">
              <Form.Label>Search Query:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter search query"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <>
              <h2>Google Search Results:</h2>
              <ul>
                {googleData.map((result, index) => (
                  <li key={index}>{result.title}</li>
                ))}
              </ul>

              <h2>DuckDuckGo Search Results:</h2>
              <ul>
                {duckDuckGoData.map((result, index) => (
                  <li key={index}>{result.title}</li>
                ))}
              </ul>

              <h2>Yandex Search Results:</h2>
              <ul>
                {yandexData.map((result, index) => (
                  <li key={index}>{result.title}</li>
                ))}
              </ul>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ScreenFour;
