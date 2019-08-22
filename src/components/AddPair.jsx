import React, { Component } from 'react';
import { addPair } from '../api/ApiFeedBack';


class AddPair extends Component {
  constructor(){
    super();
    this.state = {name: '', rating : '', message: ''}
  }

  sendForm = event => {
    event.preventDefault();
    addPair(this.state).then( res =>{
      this.props.addPairToState(res);
    });
  }

  handleChange = event => {
    this.setState({[event.target.name]:event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendForm}>
          <fieldset>
            <legend>Add new Pair</legend>
            <label htmlFor="name">
              Name
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            </label>
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

export default AddPair;
