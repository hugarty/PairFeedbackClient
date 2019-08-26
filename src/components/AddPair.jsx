import React, { Component } from 'react';
import { addPair } from '../api/ApiFeedBack';


class AddPair extends Component {
  constructor() {
    super();
    this.state = { name: '', rating: '', message: '', modalStatus: false }
  }

  sendForm = event => {
    event.preventDefault();
    addPair(this.state).then(res => {
      this.setState({ modalStatus: false })
      this.props.addPairToState(res);
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  showModal = () => {
    this.setState({ modalStatus: true })
  }

  closeModal = event => {
    if (event.target.id === "modalAddPairBackground" || event.target.id === "modalCloseButton") {
      this.setState({ modalStatus: false})
    }
  }

  getModelClassBasedOnModelStatus = boolean => {
    return boolean ? 'modal-add-pair-on' : 'modal-add-pair-off';
  }

  render() {
    return (
      <div className="addPair">
        <button onClick={this.showModal}>New Pair &#10010;</button>

        <div id="modalAddPairBackground" className={this.getModelClassBasedOnModelStatus(this.state.modalStatus)} onClick={this.closeModal}>
          <div className="modal-content-box">
            <span id="modalCloseButton" className="close" onClick={this.closeModal}>&times;</span>
            <form onSubmit={this.sendForm}>
              <fieldset className="flex-wrap">
                <legend>Add Pair</legend>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              </fieldset>
              <fieldset className="flex-wrap">
                <legend>First Feedback</legend>
                <label htmlFor="message">Message</label>
                <input type="text" name="message" value={this.state.message} onChange={this.handleChange} required />
                <label htmlFor="rating">
                  Rating:
                  <input className="rating-input" type="number" name="rating" min="0" max="10" value={this.state.rating} onChange={this.handleChange} required />
                </label>
                <button type="submit" value="">Add pair</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPair;
