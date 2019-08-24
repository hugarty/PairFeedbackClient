import React, {useState} from 'react';
import { doLogin } from '../api/ApiFeedBack';

const FormLogin = ({onSubmitMethod, errorsMsg, nameStateProperty}) => {
  const [state, setState] = useState({email:'', senha:''});
  
  /* Apenas definiu um valor diferente em uma propriedade
    let obj = {arroz:'', feijao:'x'}
    obj ={...obj, feijao: 'valorY'} */
  const handleOnChange = event => setState({...state,[event.target.name]: event.target.value});
  return (
      <form onSubmit={ event => {onSubmitMethod(event, state, doLogin, nameStateProperty)}}>
        <fieldset className="flex-wrap-start">
          <legend>Login</legend>
          <span>{errorsMsg.main}</span>
          <label  htmlFor="email">Email</label>
          <input type="email" name="email" required
            value={state.email} 
            onChange={handleOnChange} />
          <span>{errorsMsg.email}</span>
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" required 
            minLength="6"
            value={state.senha} 
            onChange={handleOnChange} />
          <span>{errorsMsg.senha}</span>
          <button type="submit" value="login">Login</button>
        </fieldset>
      </form>
  );
  
}

export default FormLogin;
