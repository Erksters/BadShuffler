import React from 'react'

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
}

function OrderedDeck() {
    const Deck = require('deck-js').Deck;
    let newDeck = new Deck();

    let Spades = [];
    let Clubs = [];
    let Diamonds = [];
    let Hearts = [];

    while (newDeck.length() > 0) {
        let someCard = newDeck.draw();

        if (someCard.getSuit() === "S") {
            Spades.push(someCard)
        }

        if (someCard.getSuit() === "H") {
            Hearts.push(someCard)
        }

        if (someCard.getSuit() === "D") {
            Diamonds.push(someCard)
        }

        if (someCard.getSuit() === "C") {
            Clubs.push(someCard)
        }
    }

    Spades.sort(function (a, b) { return (valueDictionary[a.getRank()] - valueDictionary[b.getRank()]) })
    Hearts.sort(function (a, b) { return (valueDictionary[a.getRank()] - valueDictionary[b.getRank()]) })
    Clubs.sort(function (a, b) { return (valueDictionary[a.getRank()] - valueDictionary[b.getRank()]) })
    Diamonds.sort(function (a, b) { return (valueDictionary[a.getRank()] - valueDictionary[b.getRank()]) })

    let OrganizedCards = [].concat(Spades).concat(Hearts).concat(Clubs).concat(Diamonds)
    return OrganizedCards;

}



export default OrderedDeck;