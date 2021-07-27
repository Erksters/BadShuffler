import React from 'react'
import { Row, Col } from 'react-bootstrap'
import heart from '../assets/heart.svg';
import spade from '../assets/spade.svg'
import diamond from '../assets/diamond.svg';
import club from '../assets/club.svg'

const ShowCards = props => {

    const { AllCards } = props;

    const suitDictionary = {
        "S": spade,
        "D": diamond,
        "H": heart,
        "C": club
    }

    return (

        <div>
            <Row>
                {AllCards.slice(0, 13).map((card, index) =>

                    <Col key={index} style={{ border: "solid", width: 60, height: 100, borderRadius: 10 }}>
                        {card["rank"]}

                        <img src={suitDictionary[card["suit"]]} alt="suit" />

                    </Col>
                )}
            </Row>

            <Row >
                {AllCards.slice(13, 26).map((card, index) =>
                    <Col key={index} style={{ border: "solid", width: 60, height: 100, borderRadius: 10 }}>
                        {card["rank"]}
                        <img src={suitDictionary[card["suit"]]} alt="suit" />
                    </Col>
                )}
            </Row>

            <Row >
                {AllCards.slice(26, 39).map((card, index) =>
                    <Col key={index} style={{ border: "solid", width: 60, height: 100, borderRadius: 10 }}>
                        {card["rank"]}
                        <img src={suitDictionary[card["suit"]]} alt="suit" />
                    </Col>
                )}
            </Row>

            <Row >
                {AllCards.slice(39, 52).map((card, index) =>
                    <Col key={index} style={{ border: "solid", width: 60, height: 100, borderRadius: 10 }}>
                        {card["rank"]}
                        <img src={suitDictionary[card["suit"]]} alt="suit" />
                    </Col>
                )}
            </Row>
        </div>
    );
}

export default ShowCards;