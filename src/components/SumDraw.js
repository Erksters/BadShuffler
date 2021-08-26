import React from 'react';
import MathJax from "react-mathjax";

const SumDraw = props => {

    const tex = ` \\sum_{n=1}^{52} \\frac{1}{n} `
    const tex2 = ` \\frac{1}{52} + \\frac{1}{51} + \\frac{1}{50} + \\dots  + \\frac{1}{2} + \\frac{1}{1} `
    const tex3 = `\\approx  4.53804\\dots`
    const options = {
        tex2jax: {
            inlineMath: []
        }
    }

    return (
        <div >

            <MathJax.Provider options={options}>

                <MathJax.Node formula={tex} />
                <div>Which is expressed as ...</div>
                <MathJax.Node formula={tex2} />
                <div>Which approximately equals...</div>
                <MathJax.Node formula={tex3} />
            </MathJax.Provider>

            <br />
            <br />
        </div>
    );
}

export default SumDraw;
