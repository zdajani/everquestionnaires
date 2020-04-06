import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './configureStore';

import PrimaryLayout from './layouts/PrimaryLayout';


ReactDOM.render(
  <Provider store={store}>
  { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <Route path="/" component={PrimaryLayout} />
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);

