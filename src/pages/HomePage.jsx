import React from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap';


const HomePage = () => (
  <div>
    <Row>
      <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
		   <Jumbotron>
		    <h1>Welcome!</h1>
		    <p>UltiManager allows you to record statistics for a new game, or view the results of previous games.</p>
		    <h2>Please log in to view your teams, games and statistics</h2>
		    
		  </Jumbotron>
		  <img class="img-fluid"style={{width:'100%'}} src="./frisbeePhoto.jpg" alt="Frisbee 1" ></img>
      </Col>
    </Row>
 
  </div>
);


export default HomePage;