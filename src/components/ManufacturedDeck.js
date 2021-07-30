
import React from 'react';
import ShowCards from './ShowCards';
import OrderedDeck from './OrderedDeck'
import { Col, Row } from 'react-bootstrap';

const ManufacturedDeck = () => {
  const AllCards = OrderedDeck();

  return (
    <div>
      <Col>
        <Row style={{ justifyContent: 'center' }}>
          <ShowCards AllCards={AllCards} />
        </Row>
      </Col>
    </div>
  );
}

export default ManufacturedDeck;
