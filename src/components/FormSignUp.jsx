import React, {useState} from 'react';
import { doSignUp } from '../api/ApiFeedBack';

const FormSignUp = ({onSubmitMethod, errorsMsg, nameStateProperty}) => {
  const [state, setState] = useState({name:'', email:'', senha:''});
  
  /* Apenas definiu um valor diferente em uma propriedade
    let obj = {arroz:'', feijao:'x'}
    obj ={...obj, feijao: 'valorY'} */
  const handleOnChange = event => setState({...state,[event.target.name]: event.target.value});

  return (
      <form onSubmit={ event => {onSubmitMethod(event, state, doSignUp, nameStateProperty)}}>
        <fieldset className="flex-wrap">
          <legend>SignUp</legend>
          <span>{errorsMsg.main}</span>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" minLength='3' required
            value={state.name}
            onChange={handleOnChange}/>
          <span>{errorsMsg.name}</span>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required
            value={state.email}
            onChange={handleOnChange}/>
          <span>{errorsMsg.email}</span>
          <label htmlFor="senha">Password</label>
          <input type="password" name="senha" minLength='6' required
            value={state.senha}
            onChange={handleOnChange}/>
            <span>{errorsMsg.senha}</span>
            <button type="submit" value="login">SignUp</button>
        </fieldset>
      </form>
  );
}

export default FormSignUp;
