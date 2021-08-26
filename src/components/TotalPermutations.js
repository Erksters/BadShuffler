import React from 'react';
import Permutations from './Permutations';
import ShowThreeArrangements from './ShowThreeArrangements';
import ThreeFac from './ThreeFac';

const TotalPermutations = props => {

    return (
        <div className="m-3" style={{ textAlign: 'center' }}>
            <h3>Every Deck Permutation </h3>
            There are, what seem to be, an infinite set of deck arrangements, so the chances of you playing with
            the same deck twice is extremely unlikely. Let's consider how many different arrangements there are for
            a smaller deck made up by three cards.

            <br />
            <br />
            <strong>This small Deck will consist of three face cards A, B, and C</strong>
            <br />
            <ShowThreeArrangements />
            <br />
            With these three distinct cards, we find six different arrangements. Not so bad, right?
            Instead of writing out every deck permutation in brackets, there is a simple formula to figure out all possibilities.
            We have to take the factorial of the total number of cards.

            <ThreeFac />

            <br />

            On a much larger scale, fifty-two cards, can be seen below:
            <Permutations />

            That big number above is the total number of deck orientations that you could possibly
            play with, therefore, leading to a new game every time. Even though there are that many possibilities of decks to
            play with, we can still cheat our way through many games through improper shuffling.

            <br />
            <br />

        </div>
    );
}

export default TotalPermutations;
