import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './FirstScreen.css';

const FirstScreen = () => {
  const [searchType, setSearchType] = useState(localStorage.getItem('searchType') || '');
  const [imageSrc, setImageSrc] = useState(localStorage.getItem('imageSrc') || '');

  useEffect(() => {
    localStorage.setItem('searchType', searchType);
    localStorage.setItem('imageSrc', imageSrc);
  }, [searchType, imageSrc]);

  return (
    <Container className="custom-container">
      <h1 className="heading">Welcome to the First Screen</h1>
      <Row>
        <Col md={2}>
          <Button
            className="search-button"
            variant="light"
            onClick={() => setSearchType('text')}
          >
            Search by Text
          </Button>
        </Col>
        <Col md={2}>
          <Button
            className="search-button"
            variant="light"
            onClick={() => setSearchType('image')}
          >
            Search by Image
          </Button>
        </Col>
        <Col md={3}>
          <div className="dummy-image">
            <img
              src="https://via.placeholder.com/150"
              alt="Dummy"
              className="image"
              onClick={() => setImageSrc('https://via.placeholder.com/150')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstScreen;
