import React, { Component } from 'react';
import { addFeedbackInPair } from '../api/ApiFeedBack';

export class AddFeedback extends Component {
  constructor() {
    super();
    this.state = { rating: '', message: '' }
  }

  sendForm = event => {
    event.preventDefault();
    let formBody = this.state;
    formBody.pairId = this.props.pairId;
    addFeedbackInPair(formBody).then(res => {
      this.props.addFeedbackToState(res);
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendForm}>
          <fieldset>
          <legend>Add new Feedback</legend>
            <label htmlFor="message">
              Message
                <input type="text" name="message" value={this.state.message} onChange={this.handleChange} required />
            </label>
            <label htmlFor="rating">
              Rating
                <input type="number" name="rating" min="0" max="10" value={this.state.rating} onChange={this.handleChange} required />
            </label>
            <input type="submit" value="Enviar" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddFeedback;
