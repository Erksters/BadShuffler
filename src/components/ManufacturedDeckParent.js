
import React from 'react';
import ManufacturedDeck from './ManufacturedDeck'

const ManufacturedDeckParent = props => {

    return (
        <div className="m-3" style={{ textAlign: 'center' }}>
            One of the few things that my friends and family criticize is the way
            we shuffle cards. We play a variety of card games, but our shuffling
            techniques between each game remains the same. Since we were taught
            how to shuffle decks as children, we never questioned the integrity
            of the shuffle. In this article, I wanted to put popular shuffling techniques
            to the test and determine what technique truly randomizes the deck of cards.

            Below we see the deck that most manufacturers distrubute, but it raises a few questions:

            <br /><br />
            1.  What is a good way to measure randomness?
            <br />
            2. Are all shuffling methods predictable in nature?
            <br />
            3. Do my shuffles give an equal opportunity for every permutation of deck to exist?
            <br />
            <br />
            <strong>Standard Deck of Cards</strong>

            < ManufacturedDeck />
            <br />
            <br />
            Let's discuss randomness first.
        </div>
    );
}

export default ManufacturedDeckParent;
