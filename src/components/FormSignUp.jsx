import React, { Component } from 'react';
import { doSignUp } from '../api/ApiFeedBack';

export class FormSignUp extends Component {

  constructor() {
    super();
    this.state = { name:'', email: '', senha: '', erroMsg: { main: '', name: [], email: [], senha: [] } }
  }

  sendSignUpData = event => {
    event.preventDefault();
    let { name, email, senha } = this.state;
    doSignUp({name: name, email: email, senha: senha})
      .then(res =>{
        sessionStorage.setItem('tokenFeedback', `${res.tipo} ${res.token}`)
        this.props.history.push('/');
      })
      .catch(erroPromise => {this.showErrors(erroPromise)});
  }

  showErrors = erroPromise => {
    erroPromise.then(serverErrorsMsgs => {
      return this.handleErrorsMsg(serverErrorsMsgs);
    }).then(handledErros => {
      this.setState({ erroMsg: handledErros })
    });
  }

  handleErrorsMsg = serverErrorsMsgs => {
    let errorsToUpdateState = { main: serverErrorsMsgs.message, name:[], email: [], senha: [] }
    serverErrorsMsgs.details.forEach(erroMsg => {
      if (erroMsg.includes(':')) {
        let erroArray = erroMsg.split(":");
        errorsToUpdateState[erroArray[0]].push(erroArray[1]);
      }
    });
    return errorsToUpdateState;
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendSignUpData}>
          <fieldset>
            <legend>SignUp</legend>
            <span>{this.state.erroMsg.main}</span>
            <label htmlFor="name">
              Name
                <input type="text" name="name" required 
                  minLength="3"
                  value={this.state.name} 
                  onChange={this.handleChange} />
              <span>{this.state.erroMsg.name}</span>
            </label>
            <label htmlFor="email">
              Email
                <input type="email" name="email" required
                  value={this.state.email} 
                  onChange={this.handleChange} />
              <span>{this.state.erroMsg.email}</span>
            </label>
            <label htmlFor="senha">
              Senha
                <input type="password" name="senha" required 
                  minLength="6"
                  value={this.state.senha} 
                  onChange={this.handleChange} />
              <span>{this.state.erroMsg.senha}</span>
            </label>
            <input type="submit" value="login" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormSignUp;
