import React from 'react';
import { Col, Image, Jumbotron, Row } from 'react-bootstrap';

import image from '../images/frisbeePhoto.jpg';


const HomePage = () => (
  <div>
    <Row>
      <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
		    <Jumbotron className="text-center">
  		    <h1>Welcome!</h1>
  		    <p>UltiManager allows you to record statistics for a new game, or view the results of previous games.</p>
        </Jumbotron>
        <Image responsive src={image} />
        <p>Image: Brian Whittier, 2017, Carolina Kickoff Event, UNC at Chapel Hill at Hooker Fields.</p>
      </Col>
    </Row>
  </div>
);


export default HomePage;