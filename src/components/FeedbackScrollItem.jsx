import React from 'react';

const FeedbackScrollItem = ({ feedBackDto, changeDetailsFeedback }) => {

  const onClickHandler = () => {
    const date = new Date(...feedBackDto.date.split('-'));
    const localeDate = date.toLocaleString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const message = feedBackDto.message.length > 0 ? feedBackDto.message : '...';
    let dateAndMessage = { date: localeDate, message: message};
    changeDetailsFeedback(dateAndMessage);
  }

  return (
    <button className="item-scrool-list" onClick={onClickHandler}>
      {feedBackDto.rating}
    </button>
  );
}

export default FeedbackScrollItem;
