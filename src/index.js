import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import LoginAndSignUp from './components/LoginAndSignUp';
import { notFound } from './components/NotFound';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './components/css/global.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={ props => sessionStorage.getItem('tokenFeedback') === null ?
        <Redirect to='/login' /> : <App history={props.history}/>} />
      <Route path="/login" component={LoginAndSignUp} />
      <Route component={notFound} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
