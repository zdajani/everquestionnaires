import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reduxThunk from 'redux-thunk';

import reducers from './rootReducer';

// create browser history 
const history = createHistory();

// add the history to routing middleware
const middleware = routerMiddleware(history);

// add middleware to store which allows one to dispatch navigation from anywhere
// usefull for re-routing in actions or components using connect() frome redux 
const createStoreWithMiddleware = applyMiddleware(middleware, reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

export { store, history };
