import React, { Component } from 'react';
import { doLogin } from '../api/ApiFeedBack';


export class FormLogin extends Component {

    constructor(){
        super();
        this.state = {email:'', senha:''}
    }

    sendLoginData = () =>{
        doLogin(this.state);
    }

    handleChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }

    render() {
        return (
            <div>
                <label htmlFor="email">
                    email
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                </label>
                <label htmlFor="senha">
                    senha
                    <input type="password" name="senha" value={this.state.senha}  onChange={this.handleChange}/>
                </label>
                <button onClick={this.sendLoginData}>enviar</button>
            </div>
        );
    }
}

export default FormLogin;
