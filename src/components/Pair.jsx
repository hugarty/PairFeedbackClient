import React from 'react';
import { deletePair } from '../api/ApiFeedBack';

const Pair = ({ pair, showPairDetails, deletePairInState }) => {

  const returnPairOnClick = event => {
    showPairDetails(event.target, pair);
  }

  const onClickDeletePair = event => {
    if(window.confirm(`Do you want delete ${pair.name} pair?`)){
      deletePair(pair.id)
        .then(deletePairInState(pair.id));
    }
  }

  return (
    <div className="pair">
      <div onClick={returnPairOnClick}>
        <div className="ellipsis-text">Pairname:{pair.name}</div>
        <div>{pair.average}</div>
      </div>
      <input type="button" value="deletaPair" onClick={onClickDeletePair}/>
    </div>
  );
}

export default Pair;

