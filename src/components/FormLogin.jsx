import React, { Component } from 'react';
import { doLogin } from '../api/ApiFeedBack';


export class FormLogin extends Component {

    constructor(){
        super();
        this.state = {email:'', senha:'', erroMsg : {main : '', email: [], senha: []}}
    }

    sendLoginData = event =>{
        event.preventDefault();
        doLogin({email: this.state.email, senha:this.state.senha})
        .then(res => res)
        .catch(erroPromise => this.showErros(erroPromise));
    }

    showErros = erroPromise => {
        erroPromise.then(serverErrorsMsgs => {
            return this.handleErrorsMsg(serverErrorsMsgs);
        }).then(handledErros => {
            this.setState({erroMsg : handledErros})});
    }

    handleErrorsMsg = serverErrorsMsgs =>{
        let errorsToUpdateState = {main : serverErrorsMsgs.message, email: [], senha: []}
        serverErrorsMsgs.details.forEach(erroMsg =>{
            if(erroMsg.includes(':')){
                let erroArray = erroMsg.split(":");
                errorsToUpdateState[erroArray[0]].push(erroArray[1]);
            }
        });
        return errorsToUpdateState;
    }

    handleChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.sendLoginData}>
                <span>{this.state.erroMsg.main}</span>
                <label htmlFor="email">
                    email
                    <input type="email" name="email" required value={this.state.email} onChange={this.handleChange}/>
                    <span>{this.state.erroMsg.email}</span>
                </label>
                <label htmlFor="senha">
                    senha
                    <input type="password" name="senha" required value={this.state.senha}  onChange={this.handleChange}/>
                    <span>{this.state.erroMsg.senha}</span>
                </label>
                <input type="submit" value="login"/>
            </form>
        );
    }
}

export default FormLogin;
