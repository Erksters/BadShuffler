import { Slider } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ShowCards from './ShowCards';
import OrderedDeck from './OrderedDeck'
import Chart from "r-chart";

const RiffleSplit = () => {

    //for shuffling purposes
    let LeftDeck = [];
    let RightDeck = [];

    //the deck that we will begin with and arrange
    const [NewDeck, setNewDeck] = useState(OrderedDeck());

    //How good the dealer is at shuffling
    const [Certainty, setCertainty] = useState(0);

    //graphing values
    const [StoredValues, setStoredValues] = useState([{ "key": 0, "value": 0 }]);
    const [xAxis, setxAxis] = useState([0]);

    //perform classic shuffle on our working deck
    const ClassicShuffle = () => {

        LeftDeck = NewDeck.splice(0, 26)
        RightDeck = NewDeck.splice(0, 26)
        let toBeReversedDeck = [];

        let newCertainty = Certainty;
        let value = 0.5 + Certainty;

        while (toBeReversedDeck.length < 52) {
            value = 0.5 + newCertainty;
            if (LeftDeck.length === 0 && RightDeck.length) {
                toBeReversedDeck.push(RightDeck.pop())
            }

            if (RightDeck.length === 0 && LeftDeck.length) {
                toBeReversedDeck.push(LeftDeck.pop())
            }

            if (Math.random() > value && LeftDeck.length) {
                toBeReversedDeck.push(LeftDeck.pop())
                newCertainty = newCertainty * -1;
            }

            else {
                if (RightDeck.length) {
                    toBeReversedDeck.push(RightDeck.pop());
                    newCertainty = newCertainty * -1;
                }
            }
        }

        toBeReversedDeck.reverse();

        setNewDeck(toBeReversedDeck)
        AddDataToGraph(toBeReversedDeck);
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

    //find button with id "TEST1" and click on it 10 times
    const TenClassicShuffles = () => {
        for (let i = 1; i < 11; i++) {
            setTimeout(() => {
                document.getElementById("TEST1").click();
            }, 100 * i)
        }
    }

    //find button with id "TEST1" and click on it 100 times
    const HundredClassicShuffles = () => {
        for (let i = 1; i < 101; i++) {
            setTimeout(() => {
                document.getElementById("TEST1").click();
            }, 100 * i)
        }
    }

    return (
        <div >
            <Col>
                <Row style={{ justifyContent: 'center' }}>
                    <strong>Shuffle Skill Slider Bar (Higher is Better) </strong>
                </Row>

                <Row style={{ justifyContent: 'center', margin: '30px' }}>
                    <Slider
                        onChange={(event, value) => { setCertainty(value / 200) }}
                        defaultValue={0}
                        aria-labelledby="discrete-slider-custom"
                        step={1}
                        valueLabelDisplay="on"
                        max={100}
                    />
                </Row>

                <Row style={{ justifyContent: 'center' }}>

                    <Button id="TEST1" onClick={ClassicShuffle} style={{ margin: '5px' }} >Shuffle</Button>
                    <Button onClick={TenClassicShuffles} style={{ margin: '5px' }} >Shuffle 10</Button>
                    <Button onClick={HundredClassicShuffles} style={{ margin: '5px' }} >Shuffle 100</Button>
                    <Button onClick={HandleReset} style={{ margin: '5px' }} >Reset</Button>

                </Row>


                <Row style={{ justifyContent: 'center' }}>
                    <Chart
                        data={[
                            {
                                type: 'line',
                                title: 'Top Half Points vs Bottom Half Points',
                                color: 'blue',
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

export default RiffleSplit;