import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './FirstScreen.css';

const FirstScreen = (props) => {
  const { email } = props.location?.state ?? {}; // Use nullish coalescing operator to handle undefined state
  
  const [searchType, setSearchType] = useState(localStorage.getItem('searchType') || '');
  const [imageSrc, setImageSrc] = useState(localStorage.getItem('imageSrc') || '');

  const navigate = useNavigate(); 

  useEffect(() => {
    localStorage.setItem('searchType', searchType);
    localStorage.setItem('imageSrc', imageSrc);
  }, [searchType, imageSrc]);

  const handleText = (searchType) => {
    setSearchType(searchType); // Set the search type
    navigate('/textsearch'); // Redirect to the next page
  }; 

  const handleImg = (searchType) => {
    setSearchType(searchType); // Set the search type
    navigate('/imagesearch'); // Redirect to the next page
  }; 

  return (
    <Container className="custom-container">
      <h1 className="heading" style={{textAlign:'center'}}>Welcome to the Second Screen</h1>
      
      <div className="button-container" style={{alignItems:'center'}}>
        <div className="button-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            className="search-button"
            variant="light"
            onClick={() => handleText('text')} // Call handleButtonClick with 'text'
            style={{
              width: 'fit-content',
              width: '300px',
              height: '300px',
              backgroundColor: '#FF474C',
              backgroundImage: 'url(text_img.png)', // Add text_img as the background image
              backgroundSize: 'cover', // Fit the background image to the size of the button
              margin: '20px'
            }}
          >
            {/* Search by Text */}
          </Button>
          <Button
            className="search-button"
            variant="light"
            onClick={() => handleImg('image')} // Call handleButtonClick with 'image'
            style={{ 
              width: 'fit-content', 
              width: '300px', 
              height: '300px', 
              backgroundColor: '#87CEEB',
              backgroundImage: 'url(image_img.png)', // Add image_img as the background image
              backgroundSize: 'cover', // Fit the background image to the size of the button
              margin: '20px'
            }}
          >
            {/* Search by Image */}
          </Button>
        </div>
      </div>
      
      <div className="dummy-image" style={{textAlign: 'center'}}>
        <h1 style={{paddingtop: '5px', paddingbottom: '5px'}}> Secure Online Spaces for All </h1>
        <h2 style={{paddingtop: '5px', paddingbottom: '5px'}} > Protecting users from explicit content, providing support to victims, and combating copyright infringement </h2>
      </div>
    </Container>
  );
};

export default FirstScreen;
