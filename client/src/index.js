import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './configureStore'
import QuestionnairesContainer from './questionnaires/containers/QuestionnairesContainer'
import QuestionnaireContainer from './questionnaire/containers/QuestionnaireContainer'

import './index.css';
// import App from './App';

ReactDOM.render(
  <Provider store={store}>
  { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Switch> 
          <Route path="/questionnaires/:id" component={QuestionnaireContainer}/>
          <Route path="/questionnaires" component={QuestionnairesContainer}/>
        </Switch> 
      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);

