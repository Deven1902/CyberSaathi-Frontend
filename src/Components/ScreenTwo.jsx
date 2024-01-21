import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PageComponent = () => {
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [selectedCard, setSelectedCard] = useState(localStorage.getItem('selectedCard') || '');
  
  const navigate = useNavigate(); 

  useEffect(() => {
    localStorage.setItem('email', email);
    localStorage.setItem('selectedCard', selectedCard);
  }, [email, selectedCard]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleSubmit = () => {
    navigate('/SecondScreen', { state: { email } }); // Redirect to the second screen using navigate
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
      <h1 style={{ color: '#333' }}>Screen 1</h1>
      <Form.Group style={{ width: '100%', textAlign: 'center' }}>
        <Form.Label style={{ padding: 15 }}>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderRadius: '10px', height: '45px' }}
        />
      </Form.Group>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, padding: '50px' }}>
          <Card
            onClick={() => handleCardClick('COPYRIGHT')}
            style={{
              cursor: 'pointer',
              flex: 1,
              backgroundColor: selectedCard === 'COPYRIGHT' ? '#87CEEB' : '#87CEEB',
              border: '1px solid black',
              width: '200px', // Increase the width of the card
              height: '150px', // Increase the height of the card
              backgroundImage: 'url(legal_img.jpg)', // Replace 'legal_img.jpg' with the actual image file path
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: '#fff' }}>

              </Card.Title>
            </Card.Body>
          </Card>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            COPYRIGHT
          </div>
          <Card
            onClick={() => handleCardClick('NUDITY')}
            style={{
              cursor: 'pointer',
              flex: 1,
              backgroundColor: selectedCard === 'NUDITY' ? '#FF474C' : '#FF474C',
              border: '1px solid black',
              marginLeft: 20,
              backgroundImage: 'url(nsfw_img.png)', // Replace 'legal_img.jpg' with the actual image file path
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: '#fff' }}></Card.Title>
            </Card.Body>
          </Card>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            NUDITY
          </div>
        </div>
        <Col md={12} style={{ marginTop: 20 }}>
            <Button
            variant="primary"
            onClick={handleSubmit} // Attach the handleSubmit function to the button
            style={{ border: '1px solid #3498db', borderRadius: '10px', height: '50px', width: '200px', marginLeft: '40%', marginRight: 'auto' }}
            >
              Submit
          </Button>
        </Col>
    </Container>
  );
};

export default PageComponent;