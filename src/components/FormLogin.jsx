import React, {useState} from 'react';
import { doLogin } from '../api/ApiFeedBack';

const FormLogin = ({onSubmitMethod, errorsMsg, nameStateProperty}) => {
  const [state, setState] = useState({email:'', senha:''});
  
  /* Apenas definiu um valor diferente em uma propriedade
    let obj = {arroz:'', feijao:'x'}
    obj ={...obj, feijao: 'valorY'} */
  const handleOnChange = event => setState({...state,[event.target.name]: event.target.value});
  return (
    <div>
      <form onSubmit={ event => {onSubmitMethod(event, state, doLogin, nameStateProperty)}}>
        <fieldset>
          <legend>Login</legend>
          <span>{errorsMsg.main}</span>
          <label htmlFor="email">
            email
              <input type="email" name="email" required
                value={state.email} 
                onChange={handleOnChange} />
            <span>{errorsMsg.email}</span>
          </label>
          <label htmlFor="senha">
            senha
              <input type="password" name="senha" required 
                minLength="6"
                value={state.senha} 
                onChange={handleOnChange} />
            <span>{errorsMsg.senha}</span>
          </label>
          <input type="submit" value="login" />
        </fieldset>
      </form>
    </div>
  );
  
}

export default FormLogin;
