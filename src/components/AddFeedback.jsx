import React, { Component } from 'react';
import { addFeedbackInPair } from '../api/ApiFeedBack';

export class AddFeedback extends Component {
  constructor() {
    super();
    this.state = { rating: '', message: '' }
  }

  sendForm = event => {
    event.preventDefault();
    let formBody = {...this.state, pairId: this.props.pairId};
    addFeedbackInPair(formBody).then(pairUpdated => {
      this.props.resetDetailsAndAddFeedbackToState(pairUpdated);
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="form-new-feedback">
        <form onSubmit={this.sendForm}>
          <fieldset>
          <legend>Add new Feedback</legend>
            <label htmlFor="message">Message</label>
            <input autoComplete="off" type="text" name="message" value={this.state.message} onChange={this.handleChange}  placeholder="This is optional"/>
            <label htmlFor="rating">
              Rating
                <input name="rating" type="number" min="0" max="10" className="rating-input"
                  value={this.state.rating} 
                  onChange={this.handleChange} 
                  required/>
            </label>
            <button type="submit" value="">Add Feedback</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddFeedback;
