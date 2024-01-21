import React from 'react';
// import './HeroSection.css'; // Importing CSS file for styling
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EmailTemplate from './email';

const HeroSection = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Use the navigate function to redirect
        navigate('/firstscreen'); // Replace '/first-page' with the actual path you want to navigate to
    };

    const handleChat = () => {
        // Use the navigate function to redirect
        navigate('/chatbot'); // Replace '/your-chatbot-screen' with the actual path you want to navigate to
      };

    return (
        <div className="hero-section">
            <img src="Hero_img.png" alt="Shield" className="hero-image" style={{height:"500px", width: "500px"}}/> {/* Shield Image */}
    <div class="row">
      <div class="card green">
        <h2>Find data through Vast Internet</h2>

        <img class="image" src="internet_img.png" alt="" style={{height: '100px', width: '100px', justifyContent: 'center'}}/>
      </div>

      <div class="card blue">
        <h2>Curbing Piracy</h2>
        
        <img class="image" src="piracy_img.png" alt="" style={{height: '100px', width: '100px', justifyContent: 'center'}}/>
      </div>

      <div class="card red">
        <h2>Legal Assistance</h2>
        
        <img class="image" src="legal_img.png" alt="" style={{height: '100px', width: '100px', justifyContent: 'center'}}/>
      </div>
    </div>
            <div className="hero-text">
                <h1>Secure Online Spaces for All</h1>
                <h3>Protecting users from explicit content, providing support to victims, and combating copyright infringement</h3>
                
                <div className="buttons">
                    <Button onClick={handleButtonClick} >Get Started</Button>
                </div>
            </div>
            
            {/* You can add more elements or modify existing ones as per your requirements */}
            <hr/> 

            <EmailTemplate/>

            <hr/>
            <h1> Introducing Our Cyber Security App </h1>  

            <p> Out innovative AI powered app is designed to help you find your Discrete and NSFW images with ease.</p>
            <p>We are here to ensure a secure and efficient internet experience for everyone. </p> 


            {/* <Button variant="light">Light Button</Button> */}
            <Button variant="primary" onClick={handleChat}> Chat</Button>

        </div>
    );
}

export default HeroSection;
