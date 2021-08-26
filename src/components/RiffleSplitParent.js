import React from 'react';
import RiffleSplit from './RiffleSplit';

const RiffleSplitParent = () => {

    return (
        <div className="m-3" style={{ textAlign: 'center' }}>
            <h3>Riffle Split</h3>
            The Riffle split is probably the most common type of shuffle. To perform this technique, seperate
            a deck in two and merge both halfs together randomly.
            The suspicious behavior of this technique is that, if we were to start off with a manufactured deck, then the high cards will always go
            to the bottom of the deck. Below you can shuffle a sample deck and see where most of the high cards go in the first few shuffles.
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <img style={{ maxWidth: window.screen.width - 80 }} src="https://fredhohman.com/card-shuffling/static/images/riffle.gif" alt="classic shuffle gif" />
            </div>

            <br />

            <RiffleSplit />
            <br />
            After a while, the deck does approach a random assortment of cards.
            Unfortunately, this type of shuffling method is extremely static on the ends of the deck.
            It doesn't allow new cards on to the top or bottom of the deck.
            If this is the only method of shuffling used, you will be recycling
            used cards again and again because the top few cards won't move very far.
            <br />
            <br />
            What's worse, is that if you perfect your shuffling skill (slide the bar to 100 and shuffle 100 times),
            then you will see the deck shuffle through five or six different orientations.
            This perfect shuffle defeats the purpose entirely of randomness and disables proper
            card playing.
            <br />
            <br />The solution to these issues are to shuffle more than a handful of times and to shuffle poorly.
            This way, you'll give every orientation of the deck a chance to exist.
            <br />
            <br />
            Let's look at another example.

        </div>
    )

}

export default RiffleSplitParent