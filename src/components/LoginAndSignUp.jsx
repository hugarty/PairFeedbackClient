import React from 'react';
import FormLogin from './FormLogin';
import FormSignUp from './FormSignUp';

const LoginAndSignUp = props => {
  return (
    <div>
      <FormLogin history={props.history}/>
      <FormSignUp history={props.history}/>
    </div>
  );
}

export default LoginAndSignUp;
