import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FormLogin from './components/FormLogin';
import {notFound} from './components/NotFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}/>
            <Route path="/login" component={FormLogin}/>
            <Route component={notFound}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
