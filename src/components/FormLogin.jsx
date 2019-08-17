import React, { Component } from 'react';

export class FormLogin extends Component {
    render() {
        return (
            <div>
                <form action="/" method="post">
                    <label htmlFor="email">
                        email
                        <input type="email" name="email" />
                    </label>
                    <label htmlFor="senha">
                        senha
                        <input type="password" name="senha" />
                    </label>
                </form>
            </div>
        );
    }
}

export default FormLogin;
