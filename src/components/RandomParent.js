import React from 'react';
import SumDraw from './SumDraw';

const RandomParent = props => {

    return (
        <div className="m-3" style={{ textAlign: 'center' }}>
            <h3>Determing What is Random </h3>

            Let's say we are going to play a game with a randomized deck of cards in my hand.
            We will go through the deck one card at a time and your goal is to guess
            what card is drawn. If you guess the card correctly, then you will be awarded with $1,
            and the card will be thrown into a discard pile face up.
            If you do not guess correctly, then there are no consequences and the card will still be thrown
            into a discard pile face up.

            <br />
            <br />
            Your initial odds of guessing a card correctly would be 1-in-52, then 1-in-51, and so forth until
            we draw the final card. In theory, you should win about four to five dollars in this game.
            To prove why you would win about four to five dollars, look at the math expression below.
            This expression tells us that we need to add up the "probability of guessing correctly"
            per draw until the game is over:
            <br />
            <br />
            <SumDraw />
            So now that we know one way to measure randomeness in an set of cards, let's think about how we could "cheat"
            our way into greater earnings. As the dealer, it's up to me to shuffle well enough to make the game challenging.
            Otherwise, if I shuffle poorly or predictably I would lose more in the long run.
            <br />
            <br />
            Next let's discuss some popular shuffling techniques that have made their way into billions of homes worldwide.

            <br />
            <br />
        </div>
    );
}

export default RandomParent;
