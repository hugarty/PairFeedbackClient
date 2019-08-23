import React, {Component} from 'react';
import FormLogin from './FormLogin';
import FormSignUp from './FormSignUp';


class LoginAndSignUp extends Component {
  constructor(){
    super();
    this.constValue = {
      signUpErrorsMsg:'SIGNUP_ERRORS_MSG', 
      loginErrorsMsg:'LOGIN_ERRORS_MSG'};
    this.state ={[this.constValue.signUpErrorsMsg]:'', [this.constValue.loginErrorsMsg]: ''};
  }

  sendData = (event, formBody, senderMethod, nameStateProperty) => {
    event.preventDefault();
    senderMethod(formBody)
      .then(res => this.saveTokenInSessionStorageAndRedirectToMainPage(res))
      .catch(erroPromise => this.getHandledErrorsAndSetState(erroPromise, nameStateProperty));
  }

  saveTokenInSessionStorageAndRedirectToMainPage = res => {
    sessionStorage.setItem('tokenFeedback', `${res.tipo} ${res.token}`)
    this.props.history.push('/');
  }
  
  getHandledErrorsAndSetState = (erroPromise, nameStateProperty) => {
    erroPromise.then(serverErrorsMsgs => {
      let handledErros = { 
        main: serverErrorsMsgs.message, 
        ...this.getParticularInputErrors(serverErrorsMsgs.details)
      }
      return handledErros;
    })
    .then(handledErros => {
      this.setState({[nameStateProperty]: handledErros })
    });
  }

  getParticularInputErrors = arrayInputErrors =>{
    let err = {};
    arrayInputErrors.forEach(errInput => {
      if (errInput.includes(':')) {
        let keyValue = errInput.split(":");
        err[keyValue[0]] = err[keyValue[0]] ? [...err[keyValue[0]],keyValue[1]] : [keyValue[1]];
      }
    });
    return err;
  }

  render(){
    return (
      <div>
        <FormLogin 
          onSubmitMethod={this.sendData}
          errorsMsg={this.state[this.constValue.loginErrorsMsg]}
          nameStateProperty={this.constValue.loginErrorsMsg}/>
        <FormSignUp 
          onSubmitMethod={this.sendData}
          errorsMsg={this.state[this.constValue.signUpErrorsMsg]}
          nameStateProperty={this.constValue.signUpErrorsMsg}/>
      </div>
    );
  }
}

export default LoginAndSignUp;
