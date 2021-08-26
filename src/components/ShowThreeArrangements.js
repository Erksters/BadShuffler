import React from 'react';

const ShowThreeArrangements = () => {

    return (
        <div className="m-3" style={{ textAlign: 'center' }}>
            {"{ A, B, C }"}
            <br />
            {"{ A, C, B }"}
            <br />
            {"{ B, A, C }"}
            <br />
            {"{ B, C, A }"}
            <br />
            {"{ C, A, B }"}
            <br />
            {"{ C, B, A }"}
        </div>
    );
}

export default ShowThreeArrangements;
