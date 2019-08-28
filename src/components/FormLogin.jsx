import React, {useState} from 'react';
import { doLogin } from '../api/ApiFeedBack';

const FormLogin = ({onSubmitMethod, errorsMsg, nameStateProperty}) => {
  const [state, setState] = useState({email:'', passwd:''});
  
  /* Apenas definiu um valor diferente em uma propriedade
    let obj = {arroz:'', feijao:'x'}
    obj ={...obj, feijao: 'valorY'} */
  const handleOnChange = event => setState({...state,[event.target.name]: event.target.value});
  return (
      <form onSubmit={ event => {onSubmitMethod(event, state, doLogin, nameStateProperty)}}>
        <fieldset className="flex-wrap">
          <legend>Login</legend>
          <span>{errorsMsg.main}</span>
          <label  htmlFor="email">Email</label>
          <input type="email" name="email" required
            value={state.email} 
            onChange={handleOnChange} />
          <span>{errorsMsg.email}</span>
          <label htmlFor="passwd">Password</label>
          <input type="password" name="passwd" required 
            minLength="6"
            value={state.passwd} 
            onChange={handleOnChange} />
          <span>{errorsMsg.passwd}</span>
          <button type="submit" value="login">Login</button>
        </fieldset>
      </form>
  );
  
}

export default FormLogin;
