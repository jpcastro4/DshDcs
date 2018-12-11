import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Dashboard, Login, Profile, Payment, ResetPass, PaymentOrders, Box} from './views/user/Dashboard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact={true} component={Login} />
            <Route path="/dashboard" exact={true} component={Dashboard} />
            <Route path="/profile" exact={true} component={Profile} />
            <Route path="/box/:boxId" component={Box} />
            <Route path="/orders" exact={true} component={PaymentOrders} />
            <Route path="/payment/:orderId" component={Payment} />
            <Route path="/reset-pass/:tokenReset" component={ResetPass} />

        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
