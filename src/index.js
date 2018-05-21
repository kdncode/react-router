import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, browserHistory } from 'react-router'
import Hello from './Hello'
import Contact from './Contact'
import Work from './Work'
import NotFound from './NotFound'
import Angular from './Angular'

ReactDOM.render(
<Router history={browserHistory} >
    <Route path="/" component={App} />
    <Route path="/Hello" component={Hello} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Work" component={Work} >
    {/* props children */}
        <Route path="/Work/:id" component={Angular} />
    </Route>
    <Route path="*" component={NotFound} />
</Router>

, document.getElementById('root'));
registerServiceWorker();
