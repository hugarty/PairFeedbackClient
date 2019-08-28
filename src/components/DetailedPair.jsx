import React, {useState} from 'react';
import AddFeedback from './AddFeedback';
import FeedbackScrollItem from './FeedbackScrollItem';

const DetailedPair = ({ pairDetails, addFeedbackToState, closePairDetailsModal}) => {
  const [detailsFeedback, setDetailsFeedback] = useState({id:'',date:'Date',message:'Message'});

  const closeModal = event => {
    if(event.target.id === "closeButton" || event.target.id === "backgroundModal"){
      resetDetailsFeedback();
      closePairDetailsModal();
    }
  }

  const resetDetailsAndAddFeedbackToState = pairUpdated => {
    let lastIdAddedInFeedbackList = Math.max( ...pairUpdated.feedBackDtoList.map(item => item.id));
    if(detailsFeedback.id === lastIdAddedInFeedbackList){
      resetDetailsFeedback();
    }
    addFeedbackToState(pairUpdated);
  }

  const changeDetailsFeedback = dateAndMessage => {
    setDetailsFeedback(dateAndMessage);
  }

  const resetDetailsFeedback = () => {
    setDetailsFeedback({id:'',date:'Date',message:'Message'});
  }

  if (pairDetails) {
    let { id, name, average, feedBackDtoList} = pairDetails;
    return (
      <div id="backgroundModal" onClick={closeModal} className="modal-on">
        <div className="modal-details-content-box">
          <span id="closeButton" onClick={closeModal} className="close">&times;</span>
          <h4 className="ellipsis-text">{name}</h4>
          <h5>Average: {average}</h5>
          <div className="details-feedback">
            <span>{detailsFeedback.date}</span>
            <div className="ellipsis-text text-align-center">
              <span>{detailsFeedback.message}</span>
            </div>
          </div>
          <div className="feedback-scroll-list">
            {feedBackDtoList.map(feedBackDto => {
              return (<FeedbackScrollItem key={feedBackDto.id} 
                feedBackDto={feedBackDto}
                changeDetailsFeedback={changeDetailsFeedback}/>
                )
            })}
          </div>
          <AddFeedback resetDetailsAndAddFeedbackToState={resetDetailsAndAddFeedbackToState} pairId={id} />
        </div>
      </div>
    );
  }
  return '';
}

export default DetailedPair;
