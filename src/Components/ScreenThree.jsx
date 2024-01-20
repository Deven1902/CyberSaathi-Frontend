import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ScreenThree = () => {
  const [formData, setFormData] = useState({
    name: localStorage.getItem('name') || '',
  });

  useEffect(() => {
    localStorage.setItem('serachQuery', formData.name);
  }, [formData.name]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, if needed
    console.log('Form submitted:', formData);
  };

  return (
    <Container className="custom-container">
      <h1 className="heading">Screen Three</h1>
      <Row>
        <Col md={6}>
          <div className="dummy-image">
            <img src="https://via.placeholder.com/300" alt="Dummy" className="image" />
          </div>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Serach Query</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ marginBottom: 15 }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ScreenThree;
