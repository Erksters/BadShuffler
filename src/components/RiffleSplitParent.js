import React from 'react';
import RiffleSplit from './RiffleSplit';

const RiffleSplitParent = () => {

    return (
        <div className="m-3" style={{ textAlign: 'center' }}>
            <h3>Riffle Split</h3>
            The Riffle split is probably the most common type of shuffle. What most people do is seperate
            a deck in two and merge both halfs together randomly.
            The suspicious behavior of this technique is that, if we were to start off with a manufactured deck, then the high cards will always go
            to the bottom of the deck. Below you can shuffle a sample deck and see where most of the high cards go in the first few shuffles.
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <h4>Riffle Split example</h4>
                <img src="https://fredhohman.com/card-shuffling/static/images/riffle.gif" alt="classic shuffle gif" />
            </div>

            <br />

            <RiffleSplit />
            <br />
            After a while, the deck does approach a random assortment of cards. Unfortunately, this type of shuffling method doesn't allow
             new cards on to the top or bottom of the deck. It is extremely static on the ends of the deck.
              If this is the only method of shuffling used, you will be recycling used cards again and again.

              What's worse, is that if you perfect your shuffling skill (slide the bar to 100 and shuffle 100 times),
              then you will see the deck shuffles through five or six different orientations.
               The solution to these issues are to shuffle more than a handful of times and to shuffle poorly.
               This way, you'll give every orientation of the deck a chance to exist.
            <br />
            <br />
        </div>
    )

}

export default RiffleSplitParent