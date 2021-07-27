import { Slider } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ShowCards from './ShowCards';
import OrderedDeck from './OrderedDeck'
import Chart from "r-chart";

const OverHand = () => {

    //for shuffling purposes
    let LeftDeck = [];
    let RightDeck = [];

    //the deck that we will begin with and arrange
    const [NewDeck, setNewDeck] = useState(OrderedDeck());

    //How good the dealer is at shuffling
    const [Certainty, setCertainty] = useState(7);

    //graphing values
    const [StoredValues, setStoredValues] = useState([{ "key": 0, "value": 0 }]);
    const [xAxis, setxAxis] = useState([0]);

    //perform OverHand shuffle on our working deck
    const OverHandShuffle = () => {
        LeftDeck = NewDeck.splice(0, 52)
        let finishedDeck = [];
        let newCertainty = Certainty;

        //While we are moving cards over
        while (finishedDeck.length < 52) {

            if (LeftDeck.length <= newCertainty) {
                LeftDeck.reverse()
                LeftDeck.map(card => finishedDeck.unshift(card))
            }

            if (LeftDeck.length > newCertainty) {
                let MoreOrLess = Math.random();

                if (MoreOrLess < 0.5) {
                    RightDeck = LeftDeck.splice(0, newCertainty - 1)
                }

                else {
                    RightDeck = LeftDeck.splice(0, newCertainty + 1)
                }
                RightDeck.reverse()
                RightDeck.map(card => finishedDeck.unshift(card))
            }

        }
        setNewDeck(finishedDeck)
        AddDataToGraph(finishedDeck);
    }

    //Hard reset everything (graph and init a new deck)
    const HandleReset = () => {
        setStoredValues([{ "key": 0, "value": 0 }]);
        setxAxis([0]);
        setNewDeck(OrderedDeck())
    }

    //Add data to graph dictionary
    function AddDataToGraph(newDeck) {

        //for quantifying values in deck
        let valueDictionary = {
            "A": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "10": 10,
            "J": 11,
            "Q": 12,
            "K": 13,
        };

        let topSum = 0;
        let bottomSum = 0;

        newDeck.map(
            (card, index) => {

                if (index < 26) {
                    topSum += valueDictionary[card["rank"]]
                }
                else {
                    bottomSum += valueDictionary[card["rank"]]
                }
            }
        )
        let average = topSum - bottomSum;
        let dict = { "key": StoredValues.length, "value": average };
        setStoredValues(prevItems => [...prevItems, dict]);
        setxAxis(prevItems => [...prevItems, dict["key"]]);
    }

    //find button with id "TEST2" and click on it 10 times
    const TenOverHandShuffles = () => {
        for (let i = 1; i < 11; i++) {
            setTimeout(() => {
                document.getElementById("TEST2").click();
            }, 100 * i)
        }
    }

    //find button with id "TEST2" and click on it 100 times
    const HundredOverHandShuffles = () => {
        for (let i = 1; i < 101; i++) {
            setTimeout(() => {
                document.getElementById("TEST2").click();
            }, 100 * i)
        }
    }

    return (
        <div >
            <Col>

                <Row style={{ justifyContent: 'center' }}>
                    <strong> Shuffle Chunks (Greater is More Clumped) </strong>
                </Row>

                <br />
                <Row style={{ justifyContent: 'center', margin: '30px' }}>
                    <Slider
                        onChange={(event, value) => { setCertainty(value) }}
                        defaultValue={7}
                        aria-labelledby="discrete-slider-custom"
                        step={1}
                        valueLabelDisplay="on"
                        min={4}
                        max={10}
                    />
                </Row>

                <Row style={{ justifyContent: 'center' }}>

                    <Button id="TEST2" onClick={OverHandShuffle} style={{ margin: '5px' }} >Shuffle</Button>
                    <Button onClick={TenOverHandShuffles} style={{ margin: '5px' }} >Shuffle 10</Button>
                    <Button onClick={HundredOverHandShuffles} style={{ margin: '5px' }} >Shuffle 100</Button>
                    <Button onClick={HandleReset} style={{ margin: '5px' }} >Reset</Button>

                </Row>

                <Row style={{ justifyContent: 'center' }}>
                    <Chart
                        data={[
                            {
                                type: 'line',
                                title: 'Top Half Points vs Bottom Half Points',
                                color: 'red',
                                points: StoredValues
                            }
                        ]}
                        keys={
                            xAxis
                        }
                    />

                </Row>

                <Row style={{ justifyContent: 'center' }}>
                    <ShowCards AllCards={NewDeck} />
                </Row>
            </Col>

        </div>
    );
}

export default OverHand;