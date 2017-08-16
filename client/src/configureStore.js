import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reduxThunk from 'redux-thunk';

import reducers from './rootReducer';

const history = createHistory();

const middleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(middleware, reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

export { store, history };
