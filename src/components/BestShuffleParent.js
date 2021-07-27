import React from 'react';
import BestShuffle from './BestShuffle';

const BestShuffleParent = () => {

    return (
        <div className="m-3" style={{ textAlign: 'center' }}>
            <h3>Low Rise Shuffle</h3>
            This last shuffle method is one that you probably haven't heard of.
            The technique here is to move the top card into a random spot into the deck.
            As you progress this shuffle, you will notice that a pre-determined
            "bottom card" (King of Diamonds) will slowly move up in position. Once the "bottom card"
             has moved all the way up to the top of the deck, it is safe to say that most of the deck has been shuffled.
             All that would be left is to move the bottom card into a random position into the deck.
             This way, you will have truly randomized the deck.

            Below you can shuffle a sample deck and see how many shuffles it takes
             to get the bottom King of Diamonds card to the top of the deck.
            <br />
            <br />

            <BestShuffle />
        </div>
    )

}

export default BestShuffleParent