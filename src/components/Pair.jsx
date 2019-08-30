import React from 'react';
import { deletePair } from '../api/ApiFeedBack';
import { formatFloat } from '../utils/Utils';

const Pair = ({ pair, showPairDetails, deletePairInState }) => {

  const returnPairOnClick = event => {
    showPairDetails(event.target, pair);
  }

  const onClickDeletePair = event => {
    setTimeout(() => {
      if(window.confirm(`Do you want delete ${pair.name}?`)){
        deletePair(pair.id)
          .then(deletePairInState(pair.id));
      }
    }, 100);
  }

  return (
    <div className="pair">
      <div onClick={returnPairOnClick}>
        <div className="ellipsis-text">
          <span>{pair.name}</span>
        </div>
        <span> Average: {formatFloat(pair.average)}</span>
      </div>
      <span type="button" onClick={onClickDeletePair}>&times;</span>
    </div>
  );
}

export default Pair;

