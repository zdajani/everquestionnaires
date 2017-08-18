import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuestionnairesReducer from './questionnaires/reducer';
import QuestionnaireReducer from './questionnaire/reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  form: formReducer,
  questionnaires: QuestionnairesReducer,
  questionnaire: QuestionnaireReducer,
  router: routerReducer
});

export default rootReducer;