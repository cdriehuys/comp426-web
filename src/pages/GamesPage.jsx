import React from 'react';
import { Col, Row} from 'react-bootstrap';

import { GamesList } from '../components';

const games = [
  {id: 1, name: "Darkside vs. Flyers"},
  {id: 2, name: "Darkside vs. Triforce"},
  {id: 3, name: "Triforce vs. Flyers"}
];

const GamesPage = () => (
  <div>
    <Row>
      <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
        

      {/* Container */}
        <div className="text-center">
          <h1>Games Home</h1>
          <GamesList games={games}/>

        </div>

      </Col>
    </Row>
  </div>
);


export default GamesPage;