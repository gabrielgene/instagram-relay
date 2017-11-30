import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import CreatePage from './pages/CreatePage';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, Redirect } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/create' component={CreatePage} />
    <Redirect path="**" to="/" />
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
