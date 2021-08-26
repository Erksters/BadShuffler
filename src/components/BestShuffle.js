import { Slider } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ShowCards from './ShowCards';
import OrderedDeck from './OrderedDeck'
import Chart from "r-chart";
import ShowCardsAndKD from './ShowCardsAndKD';

const BestShuffle = () => {

    //for shuffling purposes
    let LeftDeck = [];
    let RightDeck = [];

    //the deck that we will begin with and arrange
    const [NewDeck, setNewDeck] = useState(OrderedDeck());
    const [KofDPosition, setKofDPosition] = useState(-52);

    //graphing values
    const [StoredValues, setStoredValues] = useState([{ "key": 0, "value": -52 }]);
    const [xAxis, setxAxis] = useState([0]);

    //perform BestShuffle shuffle on our working deck
    const BestShuffleShuffle = () => {
        findKingDiamond();

        if (KofDPosition < -1) {
            LeftDeck = NewDeck.splice(0, 1);
            RightDeck = NewDeck.splice(0, 51);

            let newPosition = Math.floor(Math.random() * 51) + 1
            RightDeck.splice(newPosition, 0, LeftDeck.pop());

            setNewDeck(RightDeck)
            AddDataToGraph();
        }
    }

    function findKingDiamond() {
        let position = 52;
        NewDeck.map((card, index) => {
            if (card["rank"] === "K" && card["suit"] === "D") {
                position = index;
            }
        })
        setKofDPosition(-position)
    }

    //Hard reset everything (graph and init a new deck)
    const HandleReset = () => {
        setStoredValues([{ "key": 0, "value": -52 }]);
        setxAxis([0]);
        setNewDeck(OrderedDeck())
    }

    //Add data to graph dictionary
    function AddDataToGraph() {
        let dict = { "key": StoredValues.length, "value": KofDPosition };

        setStoredValues(prevItems => [...prevItems, dict]);
        setxAxis(prevItems => [...prevItems, dict["key"]]);
    }

    //find button with id "Test3" and click on it 10 times
    const TenBestShuffleShuffles = () => {
        for (let i = 1; i < 11; i++) {
            setTimeout(() => {
                document.getElementById("Test3").click();
            }, 100 * i)
        }
    }

    //find button with id "Test3" and click on it 100 times
    const HundredBestShuffleShuffles = () => {
        for (let i = 1; i < 101; i++) {
            setTimeout(() => {
                document.getElementById("Test3").click();
            }, 100 * i)
        }
    }

    return (
        <div >
            <Col>
                <Row style={{ justifyContent: 'center' }}>
                    <strong>Average is 236 Shuffles</strong>
                </Row>

                <Row style={{ justifyContent: 'center' }}>

                    <Button id="Test3" onClick={BestShuffleShuffle} style={{ margin: '5px' }} >Shuffle</Button>
                    <Button onClick={TenBestShuffleShuffles} style={{ margin: '5px' }} >Shuffle 10</Button>
                    <Button onClick={HundredBestShuffleShuffles} style={{ margin: '5px' }} >Shuffle 100</Button>
                    <Button onClick={HandleReset} style={{ margin: '5px' }} >Reset</Button>

                </Row>
                <br />
                <Row style={{ justifyContent: 'center', border: 'solid' }}>
                    <h4>Number of Shuffles: {StoredValues.length - 1}</h4>
                </Row>
                <br />

                <Row style={{ justifyContent: 'center' }}>
                    <ShowCardsAndKD AllCards={NewDeck} />
                </Row>

                <br />
                <Row style={{ justifyContent: 'center' }}> <strong>Follow the Journey of the King of Diamonds to the Top</strong></Row>

                <Row style={{ justifyContent: 'center' }}>
                    <Chart
                        data={[
                            {
                                type: 'line',
                                title: 'Position of The King Of Diamonds per Shuffle',
                                color: 'green',
                                points: StoredValues
                            }
                        ]}
                        keys={
                            xAxis
                        }
                    />
                </Row>
            </Col>
        </div>
    );
}

export default BestShuffle;