import React from 'react';
import MathJax from "react-mathjax";

const ThreeFac = props => {

    const tex = `3!`
    const tex2 = ` 3 \\times 2 \\times 1 `
    const tex3 = `= 6`

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
                <div>Which Equals ...
                    <MathJax.Node formula={tex3} />
                </div>
            </MathJax.Provider>

        </div>
    );
}

export default ThreeFac;
