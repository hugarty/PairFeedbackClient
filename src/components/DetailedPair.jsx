import React from 'react';
import AddFeedback from './AddFeedback';

const DetailedPair = ({pairDetails, addFeedbackToState}) =>{
    if(pairDetails){
        let { id, name, average, userId, feedBackDtoList } = pairDetails;
        return (
            <div>
                <h4>Detalhes do par {name}</h4>
                <AddFeedback addFeedbackToState={addFeedbackToState} pairId={id}/>
                <p>id do par:{id}</p>
                <p>id do usuário: {userId}</p>
                <p>media do par: {average}</p>
                <div>
                    { feedBackDtoList.map(feedBackDto => {
                        return <p key={feedBackDto.id}>{feedBackDto.date} {feedBackDto.rating}</p>
                    })}
                </div>
            </div>
        );
    }
    return '';
}

export default DetailedPair;
