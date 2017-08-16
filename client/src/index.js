import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './configureStore'

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
  { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
         <Route exact path="/" component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);

