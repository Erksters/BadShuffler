
import React from 'react';
import ManufacturedDeck from './ManufacturedDeck'

const ManufacturedDeckParent = props => {

    return (
        <div className="m-3" style={{ textAlign: 'center' }}>
            One of the few things that my friends and family criticize is the way
            we shuffle cards. We play a variety of games, but our shuffling
            techniques between each game remains the same. Since we were taught
            how to shuffle decks as children, we never questioned the integrity
            of the shuffle. In this article, I wanted to put popular shuffling techniques
            to the test and determine what technique truly randomizes the deck of cards.

            Below we see the deck that most manufacturers distrubute. This initial set of
            the deck is fairly standard but it raises a few questions:
            <br />
            1. Do my shuffles give an equal opportunity for every permutation to exist?
            <br />
            2. How many shuffles would it take to get the opposite orientation of the origional manufactured deck?
            <br />
            3. Are all shuffling methods predictable in nature?
            <br />
            4. What is a good way to measure randomness?
            <br />
            <br />
            <h3>Standard Deck of Cards</h3>

            < ManufacturedDeck />
            <br />
            <br />
            Although I won't be answering these questions in this article, I can argue that the
            answer to my first question is no, and the reasoning behind that is that our
            shuffling techniques don't provides sufficient randomization in a short amount of shuffles.

            <br /><br />
        </div>
    );
}

export default ManufacturedDeckParent;
