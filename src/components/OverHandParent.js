import React from 'react';
import OverHand from './OverHand';

const OverHandParent = () => {

    return (
        <div className="m-3" style={{ textAlign: 'center' }}>
            <h3>Overhand Shuffle</h3>
            The Overhand shuffle is probably the second most common type of shuffle.
            The behavior of this shuffling technique is that the cards are severely clumped
            together. You could predict what cards your opponent has due to the clumping of cards.

            Below you can shuffle a sample deck and see how little the deck has
            actually been shuffled after an <strong>EVEN</strong> number of shuffles.
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/375ce685-c00c-4f3b-a467-1f6a38391fdd/d88npqq-2a2c5683-2253-4d20-8bbb-371f378b0795.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3NWNlNjg1LWMwMGMtNGYzYi1hNDY3LTFmNmEzODM5MWZkZFwvZDg4bnBxcS0yYTJjNTY4My0yMjUzLTRkMjAtOGJiYi0zNzFmMzc4YjA3OTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gnxKmUMykmQHwBbIMxTPrpNehQVE6G868fhqUS_PQtc" alt="overhand shuffle gif" />
            </div>

            <br />


            <OverHand />

            <br />
            This shuffle is by far worse that the Riffle split because it isn't
             moving more than a few cards at a time. The position of a card and
              it's neighbors will not vary half the time. Even if we were to shuffle
              hundreds and hundreds of times (Shuffle 100), there is still a high card bias with every other
              shuffle. So depending on the number of times you shuffle (Even VS. Odd number of times), you may or may not
              play with many high cards.
            <br />

        </div>
    )

}

export default OverHandParent