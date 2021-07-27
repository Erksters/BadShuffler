
import React from 'react';
import ManufacturedDeck from './ManufacturedDeck'

const ManufacturedDeckParent = props => {

    return (
        <div style={{ textAlign: 'center' }}>
            One of the few things that my friends and family criticize is the way
            we shuffle cards. We play a variety of games, but our shuffling
            techniques between each game remains the same. Since we were taught
            how to shuffle decks as children, we never questioned the integrity
            of the shuffle. In this article, I wanted to put popular shuffling techniques
            to the test and determine what technique truly randomizes the deck of cards.

            Below we see the deck that most manufacturers distrubute. This initial set of
            the deck is fairly standard but it raises a question, how many shuffles would it
            take to get the opposite orientation of this deck? Shouldn't that inverted
            orientation of the deck have a fair chance to appear in a given shuffle?
            <br />
            <br />
            <h3>Standard Deck of Cards</h3>

            < ManufacturedDeck />
            <br />
            <br />
            The answer is no, and the reasoning behind that is that our shuffling techniques,
            don't provides sufficient randomization.

            <br /><br />
        </div>
    );
}

export default ManufacturedDeckParent;
