// import React from 'react';
// import { Link } from 'react-router-dom';
// import './FirstScreen.css';

// const FirstScreen = () => {
//   return (
//     <div className="container">
//       <h1 className="heading">Welcome to the First Screen</h1>
//       <div className="content">
//         <div className="searchOption">
//           <Link to="/search-by-text" className="link">
//             <div className="searchDiv">
//               Search by Text
//             </div>
//           </Link>
//         </div>
//         <div className="searchOption">
//           <Link to="/search-by-image" className="link">
//             <div className="searchDiv">
//               Search by Image
//             </div>
//           </Link>
//         </div>
//         <div className="dummyImage">
//           <img src="https://via.placeholder.com/150" alt="Dummy" className="image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirstScreen;



import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './FirstScreen.css';

const FirstScreen = () => {
  return (
    <Container className="custom-container">
      <h1 className="heading">Welcome to the First Screen</h1>
      <Row>
        <Col md={6}>
          <Link to="/search-by-text" className="link">
            <Button className="search-button" variant="dark">
              Search by Text
            </Button>
          </Link>
        </Col>
        <Col md={6}>
          <Link to="/search-by-image" className="link">
            <Button className="search-button" variant="dark">
              Search by Image
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <div className="dummy-image">
            <img src="https://via.placeholder.com/150" alt="Dummy" className="image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FirstScreen;
