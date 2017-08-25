import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import QuestionnairesReducer from './questionnaires/reducer';

import { 
  fetchQuestionnaireReducer, 
  createQuestionnaireReducer } from './questionnaire/reducer';

import answersReducer from './answers/reducer';
import authReducer from './auth/reducer';

import { 
  fetchAdminQuestionnairesReducer, 
  fetchAdminQuestionnaireReducer } from './admin/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  questionnaires: QuestionnairesReducer,
  questionnaire: fetchQuestionnaireReducer,
  createQuestionnaire: createQuestionnaireReducer,
  router: routerReducer,
  answers: answersReducer,
  auth: authReducer,
  adminQuestionnaires: fetchAdminQuestionnairesReducer,
  adminQuestionnaire: fetchAdminQuestionnaireReducer,
});

export default rootReducer;