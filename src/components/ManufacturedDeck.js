
import React from 'react';
import ShowCards from './ShowCards';
import OrderedDeck from './OrderedDeck'
import { Row } from 'react-bootstrap';

const ManufacturedDeck = () => {
  const AllCards = OrderedDeck();

  return (
    <div>
      <Row style={{ justifyContent: 'center' }}>
        <ShowCards AllCards={AllCards} />
      </Row>


    </div>
  );
}

export default ManufacturedDeck;
