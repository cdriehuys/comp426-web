import React from 'react';
import { Col, Image, Jumbotron, Row, Tab, Tabs } from 'react-bootstrap';

import image from '../images/frisbeePhoto.jpg';
import paperBackground from '../images/paperBackground.jpg';

const HomePage = () => (
  <div style={{'backgroundImage':`url(${paperBackground})`,'borderRadius':'10px'}}>
    <Row>
      <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
		    <Jumbotron style={{boxShadow:'5px 10px 5px gray',}}className="text-center">
  		    <h1>Welcome!</h1>
  		    <p>UltiManager allows you to record statistics for a new game, or view the results of previous games.</p>
        </Jumbotron>
        <Image style={{borderRadius:'10px'}}responsive src={image} />
        <p>Image: Brian Whitter, 2017, CarolinaKickoff play, UNC at Chapel Hill Hooker Fields.</p>
      </Col>
    </Row>
  </div>
);


export default HomePage;