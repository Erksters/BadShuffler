import React from 'react';
import MathJax from "react-mathjax";

const Permutations = props => {

    const tex = `52!`
    const tex2 = ` 52 \\times 51 \\times 50 \\times \\dots \\times 3 \\times 2 \\times 1 `
    const tex3 = `= 80658175170943878571660636856403766975289505440883277824000000000000`
    const tex4 = `= 8.06 \\times10^{67}`
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


                {window.innerWidth > 600 ?
                    (
                        <div>Which equals ...
                            <MathJax.Node formula={tex3} />

                        </div>)
                    : (
                        <div>Which equals ...
                            <MathJax.Node formula={tex4} />
                        </div>
                    )
                }

                <div>Also known as "that big number"</div>
            </MathJax.Provider>
            <br />
            <br />
        </div>
    );
}

export default Permutations;
