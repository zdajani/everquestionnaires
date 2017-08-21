import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuestionnairesReducer from './questionnaires/reducer';
import { fetchQuestionnaireReducer, createQuestionnaireReducer } from './questionnaire/reducer';
import answersReducer from './answers/reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  form: formReducer,
  questionnaires: QuestionnairesReducer,
  questionnaire: fetchQuestionnaireReducer,
  createQuestionnaire: createQuestionnaireReducer,
  router: routerReducer,
  answers: answersReducer
});

export default rootReducer;