import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import questionnairesReducer from './questionnaires/reducer';
import { fetchQuestionnaireReducer, createQuestionnaireReducer } from './questionnaire/reducer';
import answersReducer from './answers/reducer';
import authReducer from './auth/reducer';



const rootReducer = combineReducers({
  form: formReducer,
  questionnaires: questionnairesReducer,
  questionnaire: fetchQuestionnaireReducer,
  createQuestionnaire: createQuestionnaireReducer,
  router: routerReducer,
  answers: answersReducer,
  auth: authReducer
});

export default rootReducer;