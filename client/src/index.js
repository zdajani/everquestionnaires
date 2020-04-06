import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import PrimaryLayout from './layouts/PrimaryLayout';

const store = configureStore()


ReactDOM.render(
  <Provider store={store}>
  { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <Route path="/" component={PrimaryLayout} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

