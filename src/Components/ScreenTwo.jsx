import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

const PageComponent = () => {
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [selectedCard, setSelectedCard] = useState(localStorage.getItem('selectedCard') || '');

  useEffect(() => {
    localStorage.setItem('email', email);
    localStorage.setItem('selectedCard', selectedCard);
  }, [email, selectedCard]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
      <h1 style={{ color: '#333' }}>Screen 1</h1>
      <Row>
        <Col md={4} style={{ marginRight: 20 }}>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: 20 }}
            />
          </Form.Group>
        </Col>
        <Col md={7}>
          <Row>
            <Col md={6} style={{ marginBottom: 20 }}>
              <Card
                onClick={() => handleCardClick('COPYRIGHT')}
                style={{
                  cursor: 'pointer',
                  backgroundColor: selectedCard === 'COPYRIGHT' ? '#3498db' : '#ecf0f1',
                  border: '1px solid #3498db',
                }}
              >
                <Card.Body>
                  <Card.Title style={{ color: '#fff' }}>COPYRIGHT CONTENT</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} style={{ marginBottom: 20 }}>
              <Card
                onClick={() => handleCardClick('NUDITY')}
                style={{
                  cursor: 'pointer',
                  backgroundColor: selectedCard === 'NUDITY' ? '#e74c3c' : '#ecf0f1',
                  border: '1px solid #e74c3c',
                }}
              >
                <Card.Body>
                  <Card.Title style={{ color: '#fff' }}>NUDITY</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={12} style={{ marginTop: 20 }}>
          <Button
            variant="primary"
            onClick={() => console.log('Submit clicked:', email, selectedCard)}
            style={{ backgroundColor: '#3498db', border: '1px solid #3498db' }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageComponent;
