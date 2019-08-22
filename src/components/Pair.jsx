import React from 'react';

const Pair = ({pair, showPairDetails}) =>{

    const returnPairOnClick = event => {
        showPairDetails(event.target, pair);
    }

    return (
        <div onClick={returnPairOnClick}>
            <div>Pairname:{pair.name}</div>
            <div>{pair.average}</div>
        </div>
    );
}

export default Pair;

