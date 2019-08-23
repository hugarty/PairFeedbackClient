import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import LoginAndSignUp from './components/LoginAndSignUp';
import { notFound } from './components/NotFound';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => sessionStorage.getItem('tokenFeedback') === null ?
        <Redirect to='/login' /> : <App />} />
      <Route path="/login" component={LoginAndSignUp} />
      <Route component={notFound} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
