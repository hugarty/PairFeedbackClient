import React, { Component } from 'react';
import { testConectionWithAPI } from '../api/ApiFeedBack';


export class FormLogin extends Component {

    constructor(){
        super();
        this.state = {email: '', senha:''}
    }

    sendLoginData = () =>{
        testConectionWithAPI();
    }

    render() {
        return (
            <div>
                <button onClick={this.sendLoginData}>enviar</button>
            </div>
        );
    }
}

export default FormLogin;
